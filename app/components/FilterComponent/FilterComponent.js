import React, { useState } from "react";
import { Container,Chip,Typography } from "@mui/material";
import styles from './filterComponent.module.scss'
const rovers = ['Curiosity','Opportunity','Spirit'];

const FilterComponent = ({onCLick}) => {
    const [selectedRover, setSelectedRover] = useState(rovers[0]);
    const [ChipData] = useState([
        { key:1, label: 'Curiosity',},
        { key:2, label: 'Opportunity'},
        { key:3, label: 'Spirit'}
    ])
    const handleSelection = (currentSelection) => {
        onCLick(currentSelection);
        setSelectedRover(currentSelection)
    }
    return(
        <Container>
            <Typography variant="subtitle2">
                Rovers               
            </Typography>
            <Container className={styles.chipContainer}>
               {ChipData.map((data) => (
                    <Chip 
                        className={styles.chipItem} 
                        key={data.key}
                        label={data.label}
                        color={`${selectedRover.toLocaleLowerCase() === data.label.toLocaleLowerCase() ? 'primary': 'default'}`}
                        onClick={(e) => handleSelection(data.label.toLocaleLowerCase())}   
                        />) 
                )}
            </Container>
        </Container>
    )
}

export default FilterComponent;