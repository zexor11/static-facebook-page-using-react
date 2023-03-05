import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import { Mail, Notifications, Pets } from "@mui/icons-material"
import React, { useState } from 'react'
import wallpaper from "../wallpaperflare.com_wallpaper (3).jpg"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    
    <AppBar position='sticky' >
      <StyledToolbar>
        <Typography variant='h6' sx={{display : {xs: 'none', sm: 'block'}}} >Mudit Book</Typography>
        <Pets sx={{display : {xs: 'block', sm: 'none'}}} />
        <Search><InputBase placeholder='Search..'/></Search>
        <Icon>
        <Badge badgeContent={2} color="error" >
        <Notifications />
        </Badge>
        <Badge badgeContent={4} color="error" >
        <Mail />
        </Badge>
        <Avatar src={wallpaper} sx={{width: '30px', height:"30px"}}
          onClick={(e)=>setOpen(true)} />
        
        </Icon>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        /*anchorEl={anchorEl}*/
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

const Icon = styled(Box)(({theme})=> ({
  display: "flex",
  gap: "15px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));

const Userbox = styled(Box)(({theme})=> ({
  display: "flex",
  gap: "15px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}));

const Search = styled("div")(({theme})=> ({
  backgroundColor: 'white',
  padding: "0px 10px",
  borderRadius: "5px",
  width: "40%"
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',


})
export default Navbar
