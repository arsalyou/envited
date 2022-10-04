import React, { useEffect, useState } from "react";
import EButton from "./components/Button";
import Heading from "./components/Heading";
import Img from "./components/Img";
import { Stack } from '@mui/material';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const { height, width } = useWindowDimensions();

  return (
    <>
    {
      (width < 900) ?
        <Stack sx={{
        mt: { sm: '60px', xs: '94px' },
      }} alignItems='center'>
        <Heading />
        <Img />
        <EButton />
      </Stack> 
      :
     <Stack sx={{
      }} direction='row' alignItems='center'>
        <Img ml='170px'/>
        <Stack sx={{
          mt: '150px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', mr: '160px'
        }} direction='column' >
          <Heading />
          <EButton />
        </Stack>
      </Stack>
    }
   </>
  );
}

export default App;
