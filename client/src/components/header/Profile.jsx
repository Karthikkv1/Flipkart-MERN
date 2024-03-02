// File Created on 02-03-2024 9:51AM

import { Box,Typography,Menu,MenuItem } from "@mui/material"; //02-03-2024 9:58AM
import { useState } from 'react';
const Profile = ({account}) => {

    const [open,setOpen] = useState(false);

    const handleClick =(event) =>{           // 02-03-2024 10:08AM
        setOpen(event.currentTarget);


    }
    const handleClose =() =>{
        setOpen(false);
    }

    return(
        <>
       <Box onClick={handleClick}> <Typography style={{marginTop:2}}>{account}</Typography> </Box>

       <Menu
      
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
    
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
    
      </Menu>
        </>
    )
}

export default Profile;



