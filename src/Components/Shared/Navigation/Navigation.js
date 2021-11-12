import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const Navigation = () => {
  const {user , logOut} = useAuth()
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link style={{textDecoration:'none', color:'white'}} to='/'> Road Rollers </Link>
          </Typography>
          <Link style={{textDecoration:'none'}} to='/cycles'>
              <Button style={{color:'white'}}>Explore More</Button>
          </Link>
          {
            user?.email ?
           <Box>
              <NavLink style={{textDecoration:'none', color:'white'}} to='/'>
          
          <Button onClick={logOut} color="inherit">LogOut</Button>
          </NavLink>
              <NavLink style={{textDecoration:'none', color:'white'}} to='/dashboard'>
          
          <Button  color="inherit">DashBoard</Button>
          </NavLink>

           </Box>
            :
          <NavLink style={{textDecoration:'none' , color:'white'}} to='/login'>
          
          <Button color="inherit">Login</Button>
          </NavLink>
          }
          {!user.email &&<NavLink style={{textDecoration:'none' , color:'white'}} to='/register'>
          
          <Button color="inherit">Register</Button>
          </NavLink>}
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
};

export default Navigation;