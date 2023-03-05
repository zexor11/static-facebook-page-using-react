import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Add from "./components/Add";


const App = () => {
const [mode, Setmode] =useState("light");

  const darktheme = createTheme({
    palette:{
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darktheme} >
    <Box bgcolor={"background.default"} color="text.primary">
    <Navbar />
    <Stack direction={'row'} spacing={2} justifyContent="space-between">
    <Sidebar Setmode={Setmode} mode={mode}/>
    <Feed />
    <Rightbar />
    </Stack>
    <Add />
    
    </Box>
    </ThemeProvider>
  )
}


export default App
