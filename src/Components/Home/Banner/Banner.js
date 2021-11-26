import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/young-male-bike-rider-bicycle-isolated-gradient-wall-neon-man-training-practicing.jpg'

const Banner = () => {
    return (
        <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={banner} alt='' width='1100px' height='630px'/>
        </Grid>
        <Grid item sx={{display:'flex', alignItems:'center', justifyContent:'center' , flexDirection:'column'}} xs={6}>
        <Typography variant="h2" component="div" gutterBottom>
        Wanna Be A Pro Cyclist?
      </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
        Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport. ... They are the principal means of transportation in many parts of the world. Cycling is widely regarded as an effective and efficient mode of transportation optimal for short to moderate distances.
      </Typography>
      <Link style={{textDecoration:'none', color:'white'}} to='/login'>
      <Button variant='contained'>Join Now</Button>
      </Link>
            
        </Grid>
        
      </Grid>
    );
};

export default Banner;