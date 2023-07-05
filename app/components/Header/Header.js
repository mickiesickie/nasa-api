import React from "react";
import {Box, AppBar, Toolbar, Typography, Button } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StarIcon from '@mui/icons-material/Star';

import styles from './header.module.scss'
import { Container } from "@mui/system";

const Header = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar>
            <RocketLaunchIcon  className={styles.rocket}/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Southern Code React Challenge 
            </Typography>
            <Button color="inherit"><StarIcon  />Favorites</Button>
          </Toolbar>
          </Container>
        </AppBar>
      </Box>);
}

export default Header;