import React from 'react'
import { Box } from '@mui/material';

export default function Img(props) {
  return (
    <Box
        component="img"
        sx={{ 
          height: { md:'775.69px', sm: '548.27px', xs: '292px'  } ,
          width: { md:'440px', sm: '311.9px', xs: '165.63px'  },
          mt: { md:'100px', sm: '55px', xs: '36px'  },
          ...props
        }}
        alt="The house from the offer."
        src="img.svg"/>
    )
}
