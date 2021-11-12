import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink , useLocation , useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Login = () => {

    const [loginData , setLoginData] = useState({})
    const {signInUser , user , isLoading , error , signinWithGoogle} = useAuth()

    const location = useLocation()
    const history = useHistory()

    const handelOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(value , field)
        e.preventDefault()
    }
    const handleGoogleSignin = ()=>{
        signinWithGoogle(location , history)
    }

    const handleSubmit = (e) =>{
        signInUser(loginData.email , loginData.password , location , history)
        e.preventDefault()
    }
    return (
       <Container>
           <Grid container spacing={2}>
               <Grid item  sx={{mt:'200px'}} xs={8} md={6}>
               <Typography variant="body1" gutterBottom>
                Login
                </Typography>
                { !isLoading &&
                <form onSubmit={handleSubmit}>
                <TextField
                onBlur={handelOnchange} 
                name='email'
                sx={{width:'50%', m:1}}
                id="standard-basic" 
                label="Your Email" 
                variant="standard" />
                <TextField 
                onBlur={handelOnchange}
                name='password'
                sx={{width:'50%', m:1}}
                id="standard-basic" 
                label="Your Password" 
                type='password'
                variant="standard" 
                /> <br />
                <Button
                sx={{mt:2,width:'50%'}}
                type='submit'
                
                variant='contained'
                >Login</Button>
                <br/>
                <NavLink to='/register' style={{textDecoration:'none'}}>
                <Button  variant='text'>New User? Please Register</Button>    
                </NavLink>        
                </form>}
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">Congrats! Successfully created!</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
                <p><hr /></p>
                <Button onClick={handleGoogleSignin}  variant='contained'>SignIn With Google</Button>
               </Grid>
               
           </Grid>
       </Container>
    );
};

export default Login;