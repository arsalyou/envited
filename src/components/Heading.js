import React from 'react'
import { Box, Typography } from '@mui/material'


export default function Heading() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column'  }}>
            <Box sx= {{ 
                        width: { md:'574px', sm: '573.9px', xs: '321px'  },
                        height:{ sm:'264px', xs: '160px'  },
                        display: 'flex', flexDirection: 'column', 
                        alignItems: { md:'flex-end', sm: 'center', xs: 'center'  },
                        }}>
                <Typography sx= {{fontSize: { md:'64px', sm: '64px', xs: '36px'  }, fontStyle: 'bold', 
                lineHeight: { sm:'64px', xs: '36px'  },
                }}>Imagine if</Typography>
                <Typography sx={{
                    background: `linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)`, backgroundClip: 'text',
                    textFillColor: 'transparent', 
                    fontSize: { md:'64px', sm: '64px', xs: '36px'  }, fontStyle: 'bold', 
                    lineHeight: { sm:'64px', xs: '36px'  },
                }}>Snapchat</Typography>
                <Typography sx= {{fontSize: { md:'64px', sm: '64px', xs: '36px'  }, fontStyle: 'bold', 
                lineHeight: { sm:'64px', xs: '36px'  },
                }}>had events.</Typography>
            </Box>
            <Box sx= {{ 
                        display: 'flex', flexDirection: 'column', 
                        alignItems: { md:'flex-end', sm: 'center', xs: 'center'  },
                        }}>
                <Typography  sx= {{fontSize: { sm: '24px', xs: '16px'  }, color: '#4F4F4F', fontWeight: 'light', color: '#4F4F4F'}}>Easily host and share events with your friends </Typography>
                <Typography  sx= {{fontSize: { sm: '24px', xs: '16px'  }, color: '#4F4F4F', fontWeight: 'light', color: '#4F4F4F'}} >across any social media.</Typography>
            </Box>
        </Box>
    )
}
