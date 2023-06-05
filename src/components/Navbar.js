import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from "@mui/material";
// The Link component is used in React applications with routing to create links between different routes or pages.
//The Stack component is part of the Material-UI library, a popular React component library for building user interfaces.
import Logo from '../assets/images/Logo.png';


const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{width:'48px', height:'48px', margin:'0 20px'}} />
      </Link>
      <Stack
      direction="row"
      gap="40px"
      fontSize="24px"
      alignItems={"flex-end"}
      >
        <Link to="/" className="hover-link" style={{ textDecoration:'none', color:"#3A1212" /*, borderBottom:'3px solid #FF2625' */ }}>Home</Link>
        <a className="hover-link" href='#exercises' style={{textDecoration:'none', color:'#3A1212'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
