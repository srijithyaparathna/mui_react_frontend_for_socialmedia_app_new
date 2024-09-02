import { Box } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <Box bgcolor={"lightcoral" }  flex={1} p={2} 
    // remove the display the sidebar on the small screen mobile
    sx={{display: {xs:"none",sm:"block"}} }   
    
    
    
    >Sidebar</Box>
  )
}

export default Sidebar