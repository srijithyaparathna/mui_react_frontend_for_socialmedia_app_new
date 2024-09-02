import { AppBar, InputBase, Menu, MenuItem, styled,Toolbar, Typography } from '@mui/material'
import React from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Notification from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

const StyledToolbar = styled(Toolbar)({
   display : "flex",
    justifyContent: "space-between"
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled('div')(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up('sm')]: {
    display: "flex",
  },
  
}));

const UserBox = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up('sm')]: {
    display: "none",
  },
  
}));



function Navbar() {
  const [open, setOpen] = React.useState(false);  
  return (
    <AppBar position='sticky' >
      <StyledToolbar>
    
    <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}  >  Srijith Yaparathna</Typography>
    <PetsIcon sx={{display:{xs:"block",sm:"none"}}}  ></PetsIcon>
    <Search><InputBase  placeholder=' search...' > </InputBase></Search>
    <Icons>
    <Badge badgeContent={4} color="error">
  <MailIcon  />
</Badge>
<Badge badgeContent={2} color="error">
  <Notification />
</Badge>
<Avatar  sx={{width:30,height:30}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" 
onClick={e => setOpen(true)}
/>

    </Icons>
    <UserBox onClick={e => setOpen(true)} >
    <Avatar  sx={{width:30,height:30}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    <Typography variant="span" sx={{display:{xs:"none",sm:"block"}}}  >  Srijith Yaparathna</Typography>
    </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
   
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>


    </AppBar>
  )
}

export default Navbar