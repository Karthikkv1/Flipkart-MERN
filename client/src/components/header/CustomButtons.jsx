import { useState ,useContext } from "react"; //28-02-2024

import { Box, Button, Typography, styled } from "@mui/material";

import { ShoppingCart } from "@mui/icons-material"; 

import { DataContext } from "../../context/DataProvider"; //01-03-2024 8:52PM

//Components 28-02-2024
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile"; //02-03-2024 9:58AM

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 14px;
    align-items: center;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const {account} =useContext(DataContext);


  const openDialog = ()  =>
  {
    setOpen(true);

  }
  return (
    <Wrapper>
      {
        account ? <Profile account={account}/>: //Modified on 02-03-2024 9:56AM 
        <LoginButton variant="contained" onClick={() => openDialog()}>
        Login
      </LoginButton>
      }

      {/* <LoginButton variant="contained" onClick={() => openDialog()}>
        Login
      </LoginButton> */}

      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open ={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
