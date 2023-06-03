import React, {useEffect,useState} from 'react';
import {Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize: {lg:'44px', xs:'30px'}}}
      mb="50px" textAlign="center">
        Exercises <br/>You Must Know 
      </Typography>

      <Box position="relative" mb="72px" >
        <TextField 
        sx={{
          input:{ fontWeight:'700', 
          border:'none',
          borderRadius: '4px'},
          width: {lg: '1170px', xs:'350px'},
          backgroundColor: '#ffff',
          borderRadius:'40px'
        }}
        height="76px"
        value=""
        onChange={(e) => {}}
        placeholder='Search Exercises'
        type='text'
        />
        <Button className="search-btn"
        sx={{
            bgcolor:'#FF2625'
        }}
        >
        Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises