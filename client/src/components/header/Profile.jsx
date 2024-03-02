// File Created on 02-03-2024 9:51AM

import { Box,Typography,Menu,MenuItem,styled } from "@mui/material"; //02-03-2024 9:58AM
import { useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'; //02-03-2024 10:23AM

const Component = styled(Menu)`
margin-top:5px;


`;

const Logout =styled(Typography)`
font-size:14px;
margin-left:20px;

`


const Profile = ({account,setAccount}) => {

    const [open,setOpen] = useState(false);

    const handleClick =(event) =>{           // 02-03-2024 10:08AM
        setOpen(event.currentTarget);


    }
    const handleClose =() =>{
        setOpen(false);
    }

    const logoutUser =() =>{
      setAccount('');
    }

    return(
        <>
       <Box onClick={handleClick}> <Typography style={{marginTop:2 ,cursor:'pointer'}}>{account}</Typography> </Box>

       <Component
      
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
    
      >
        <MenuItem onClick={() =>{handleClose(); logoutUser();}}>
            <PowerSettingsNewIcon color="primary" fontSize="small"/>
            <Logout>Logout</Logout>
        </MenuItem>
    
      </Component>
        </>
    )
}

export default Profile;



