import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
    const [cycles , setCycles] = useState([])

    useEffect(()=>{
        fetch('https://boiling-headland-35845.herokuapp.com/cycle')
        .then(res=>res.json())
        .then(data=>setCycles(data))
    },[])
    const fixedData = cycles.slice(1,7)
    return (
        <Box>        <Typography gutterBottom variant="h3" sx={{display:'flex', justifyContent:'center', marginTop:'10px'}} component="div">
                Services
            </Typography>,
        <Grid container  spacing={2}>
            
          <Grid item  sx={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gridGap:2}} xs={12} >
            {
                fixedData.map(cycle=><Card  sx={{ maxWidth: 345, margin:'10px' }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={cycle.img}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {cycle.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {cycle.description}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          Price :${cycle.price}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions sx={{justifyContent:'center'}}>
                      <Link to={`purchase/${cycle._id}`}>
                      <Button variant='contained'  size="medium" color="primary">
                        Buy Now
                      </Button>
                      </Link>
                    </CardActions>
                  </Card>)
            }
          </Grid>
         
          
        </Grid>
        </Box>

    );
};

export default Service;