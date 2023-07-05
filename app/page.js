"use client"
import { useState } from 'react';
import { Container, Grid } from '@mui/material'

import Header from './components/Header/Header'
import SearchComponent from './components/SearchComponent/SearchComponent';
import FilterComponent from './components/FilterComponent/FilterComponent';
import CardComponent from './components/CardComponent/CardComponent';
import  styles from './page.module.css'
const rovers = ['curiosity','opportunity','spirit'];

export default function Home() {
  const [rover,setRover] = useState(rovers[0])
  const [value,setValue] = useState();

 return (
    <main>
    <Container maxWidth="xl">
        <Header />
        <Grid container  spacing={2} className={styles.mainContainer} >
          <Grid item xs={12}>
            <Container>
            <Grid container  spacing={2}>
                <Grid item xs={6}>
                <SearchComponent  dateValue={value} setValue={setValue}/>
                </Grid>
                <Grid item xs={6}>
                <FilterComponent onCLick={setRover}/>
              </Grid>
            </Grid>
            </Container>
          </Grid> 
        <Grid item xs={12}>
            <CardComponent rover={rover} date={value}/>
        </Grid>
       </Grid> 
    </Container>
    </main>
  )
}
