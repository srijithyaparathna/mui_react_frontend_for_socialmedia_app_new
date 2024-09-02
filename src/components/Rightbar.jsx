import { Box } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box bgcolor={'skyblue'} flex={2} p={2} 
    // remove the display the sidebar on the small screen mobile 
    sx={{display: {xs:"none",sm:"block"}} } 
    >Rightbar</Box>
  )
}

export default Rightbar