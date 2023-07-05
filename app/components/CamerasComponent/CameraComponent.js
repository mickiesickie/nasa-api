import React, { useState } from "react";
import { Paper,Chip, Typography } from "@mui/material";

import styles from "./cameraComponent.module.scss";

const CameraComponent = ({cameras, selectedCameras, setSelected}) => {
        
    const handleSelected = (selectedItem) => {
        setSelected((prev) => {
            if(prev.includes(selectedItem)){
                const filtered = prev.filter((item) => item !== selectedItem)
                
                return filtered;
            }
            else {
                
                return ([...prev, selectedItem]);
            }
        })
    }

    return(
        <>
        <Typography elevation={3} className={styles.titleCamera}>
            Filter by camera...
        </Typography>
        <Paper 
            elevation={3} 
            className={styles.cameraList}
            >
            {
            cameras && cameras.length > 0 && cameras.map((item,index) => (
                    <Chip 
                        key={index}
                        className={styles.listItem} 
                        label={item.name}
                        color={`${selectedCameras.includes(item.name) ? 'primary' : 'default'}`}
                        onClick={() => handleSelected(item.name)}/>
                ))
            }
        </Paper>
      </> 
    )
};

export default CameraComponent;