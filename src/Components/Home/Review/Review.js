import { Rating, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';

const Review = () => {
    const [review , setReview] = useState([]);
    useEffect(()=>{
        fetch('https://boiling-headland-35845.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div>
            <Typography variant='h4' sx={{marginTop:'30px', marginBottom:'30px'}}>Buyer's Review</Typography>
        <Box sx={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr',gridGap:'10px'}}>
        {
                review.map(res=>  <Box>
                    
                    <Paper elevation={3} sx={{padding:'30px',height:'200px'}}>
                        <Typography variant='h5'>{res.name}</Typography>
                        <Rating name="read-only" value={res.rating} readOnly />
                        <Typography variant='subtitle1'>{res.review}</Typography>
                    </Paper>
                  </Box>)
                   
            }
        </Box>
        </div>
    );
};

export default Review;