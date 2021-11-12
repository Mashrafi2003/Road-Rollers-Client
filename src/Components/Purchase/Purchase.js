import {  Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Navigation from '../Shared/Navigation/Navigation';
import useAuth from '../../hooks/useAuth';
import './Purchase.css'




const Purchase = () => {
    
    const {user} = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/orders',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.insertedId){
                alert('Order Processed')
                reset()
            }
        })
    };
    const {id} = useParams();
    const [cycles , setCycles] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/cycle/${id}`)
        .then(res=>res.json())
        .then(data=>setCycles(data))
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navigation/>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <img src={cycles.img} alt='' width='300px'/>
            <Typography gutterBottom variant="h2" component="div">
                          {cycles.name}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
                          {cycles.description}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                       Price:   ${cycles.price}
                        </Typography>
          </Grid>
          <Grid item xs={6}>
          <div className='submit-service'>
              <h2 className='text-secondary'>Submit To Continue</h2>
          <form className='form-service' onSubmit={handleSubmit(onSubmit)}>
      <input {...register("destination", { required: true, maxLength: 20 })} value={cycles.name} required/>
      <input {...register("name")}  value={user.displayName || 'Admin'}  required/>
      <input {...register("email")}  value={user.email || ''} required/>
      <input type="date" {...register("date" )} required/>
      <input className='btn btn-warning' type="submit"/>
    </form>
          </div>
          </Grid> 
        </Grid>
      </Box>
    );
};

export default Purchase;