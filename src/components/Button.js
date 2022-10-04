import React from 'react'
import { Button } from '@mui/material';

export default function EButton() {
  return (
    <Button  sx={{ fontWeight: 700,    background: 'linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)', borderRadius: '10px',
    color:'white' , height:  '55px',
    width: { sm:'320px', xs: '187px'  },
    mt:{sm:'52px', xs: '34px'}
    
    }} >
    🎉 Create my event</Button>
  )
}
