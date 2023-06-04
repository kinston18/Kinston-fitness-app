import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';


const BodyPart = () => {
return (
    <Stack
    type = "button"
    alignItems = "center"
    justifyContent= "center"
    className = "bodyPart-card"

    sx={
        bodyPart === item ? {
                borderTop : '4px solid #ff2625',
                backgroundColor : '#ffff'
        } : 
    } 
    >
        <img src={Icon} alt='dumbbell' styles ={ { width :'40px', height:'40px'} }/>
    </Stack>
  )
}

export default BodyPart