import React from 'react';
import { Box, Button, CssBaseline, styled, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import theme from "./theme"
import Feed from "./components/Feed"
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import {Stack} from "@mui/material"
function App() {




  return (
    <div className="App"  >

      <Box>
      <Navbar></Navbar>
      <Stack direction="row" spacing={2} justifyContent="space-between"  >
       
      <Sidebar></Sidebar>
      <Feed></Feed>
      <Rightbar></Rightbar>
      </Stack>
      </Box>
       </div>
  );
}

export default App;
