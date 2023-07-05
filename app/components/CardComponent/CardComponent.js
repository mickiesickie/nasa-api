import React, { useEffect, useLayoutEffect, useState} from "react";
import Carditem from "./CardItem/CardItem";
import { Container, Grid } from "@mui/material";
import getDataMars from "@/app/API/getDataMars";
import getManifest from "@/app/API/getManifest";

import CameraComponent from "../CamerasComponent/CameraComponent";
import styles from './cardComponent.module.scss';

const CardComponent = ({rover,date}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [vehicleSelected, setVehicleSelected] = useState({rover})
    const [photosRover, setPhotosRover] = useState({
        curiosity:{},
        opportunity:{},
        spirit:{}
    });
    
    // TO DO: Save in LocalStorage
    const [selectedCameras, setSelectedCameras] = useState([]);
    const  [selectedRover,setSelectedRover] = useState([]);

    const handleCall = async () => {
        const responsePromise = await Promise.all([getManifest(rover),getDataMars({rover,date})]).then((response) => {
            const [rover,data] = response;
            return {rover, data} 
        });
        return responsePromise;
     }
    
     const handleFilterByCameras = (selectedCams) => {
        const  filterByCameras = photosRover[rover].photos.filter((item) => 
        selectedCams.includes(item.camera.name));
        setSelectedRover({
            ...selectedRover,
            photos: filterByCameras
        })
     }

     const getMoreDataScrolling = async  () => {
        try{
            setIsLoading(true)
            const result = await getDataMars({rover,date,page: photosRover[rover].page + 1});
            const {data: {photos}} = result
            setPhotosRover(
                (prevState) => 
                 {
                    return {
                    ...prevState,
                        [rover]:{
                            ...prevState[rover],
                            photos: [...prevState[rover].photos,...photos],
                            page: prevState[rover].page + 1,
                        }
                    }
                }
            )
        }
        catch(error){
            console.log('error', error)
        }
        finally{
            setIsLoading(false);
        }
     }

     const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
            return;
          }
          else{
            getMoreDataScrolling();
          }
         
     }
    
    useEffect(() => {
        if(selectedCameras.length > 0){
             handleFilterByCameras(selectedCameras);
        }else{
            setSelectedRover(photosRover[rover])
        }
    },[selectedCameras]);

    useEffect(() => {
        window.addEventListener('scroll',handleScroll); 
        return () => window.removeEventListener('scroll', 
            handleScroll);
    },[isLoading])

    useEffect(()=> {
        setSelectedRover(photosRover[rover]);
    },[photosRover])
     
    useLayoutEffect(()=> {
        setVehicleSelected(rover);
        if(photosRover[rover].hasOwnProperty('cameras') ){
            setSelectedRover(photosRover[rover]);
        }
        else{
            const fetcthing = async () => {
                try{
                    const data = await handleCall();
                        const {photos} = data.data.data;
                        const {page} = data.data
                         setPhotosRover(
                            {...photosRover,
                            [rover]:{
                                ...
                                {
                                photos,
                                cameras: data?.rover.rover.cameras,
                                page
                                }
                            }
                        })
                    }
                    catch(error){
                        console.log('error', error)
                    }
                    finally{
                    }
                }
            fetcthing();
        }
    },[rover])

    useEffect(() => {
    if(photosRover[rover].hasOwnProperty('cameras')) {
        getMoreDataScrolling();
    } 
    },[date])
    
    return(
        <>
        <Container >
            <CameraComponent cameras={photosRover[rover].cameras} selectedCameras={selectedCameras}  setSelected={setSelectedCameras}/>
        </Container>
        <Container>
                <Grid container spacing={2} className={styles.gridContainer}>
                { selectedRover.photos && selectedRover.photos.length > 0 && selectedRover.photos.map((item,idex,array) => 
                     (<Carditem  key={Math.random()} {...item}  theId={array.length - 25 === idex  ? 'last-item': ''}/>)
                    
                )
                }
                </Grid>               
        </Container>
        </>
    )
}

export default CardComponent;