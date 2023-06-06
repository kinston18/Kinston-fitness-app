import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo-check2.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>

    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="5px">Made with ❤️ by Prajjwal Goswami</Typography>

    <Typography  style={{ marginBottom: '40px' }} textAlign="center" ><p>© {new Date().getFullYear()} Your Website. All rights reserved.</p></Typography>

    </Box>
    
  );
};

export default Footer;
