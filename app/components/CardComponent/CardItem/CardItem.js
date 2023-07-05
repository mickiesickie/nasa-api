import React from "react";
import {Card, CardContent, CardMedia, Grid, Paper, Typography} from '@mui/material'
const Carditem = (props) => {
    const {img_src, earth_date, camera : {full_name}, rover:{name,status},theId} = props
    return(
        <Grid item md={4} id={theId}>
            <Paper elevation={3}>
            <Card variant='outlined'>
                <CardMedia 
                    component="img"
                    image={img_src}
                    alt={name}
                    height={200}
                />
                <CardContent>
                <Typography>
                      Day:  {earth_date}
                    </Typography>
                    <Typography>
                      Camera:  {full_name}
                    </Typography>
                    <Typography>
                      Status:  {status}
                    </Typography>
                    <Typography>
                       Rover: {name}
                    </Typography>
                </CardContent>
            </Card>
            </Paper>
        </Grid>
    )
}

export default Carditem