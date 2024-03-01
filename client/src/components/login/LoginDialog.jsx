import { useState } from "react";

import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 100%;
  width: 40%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

// 29-02-2024 9:50PM
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

// 29-02-2024 9:59PM
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;
// 29-02-2024 10:05PM
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountInitialValues = {
    login:{
        view:'login'
    },
    signup:{
        view:'signup'
    }
}

const LoginDialog = ({ open, setOpen }) => {

const [account , toggleAccount] = useState(accountInitialValues.login)

  const handleClose = () => {
    setOpen(false);
  }

  const toggleSignup = () => {
 toggleAccount(accountInitialValues.signup)

  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      {/* In line 75 paper props is used to set width to login frame 1-03-2024 */}
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">Login</Typography>
            <Typography style={{ marginTop: 20 }}>
              Get access to your Orders, Wishlist and Recommendations
            </Typography>
          </Image>
          {
            account.view === 'login' ? 
            <Wrapper>
              <TextField variant="standard" label="Enter Email/Mobile Number" />
              <TextField variant="standard" label="Enter Password" />
              <Text>
                By continuing , you are agree to Flipkart's Terms of use and
                privacy Policy
              </Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request Otp</RequestOTP>
              <CreateAccount onClick={( )=> toggleSignup() }>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
           : 
            <Wrapper>
              <TextField variant="standard" label="Enter Firstname" />
              <TextField variant="standard" label="Enter Lastname" />
              <TextField variant="standard" label="Enter Username" />
              <TextField variant="standard" label="Enter Email" />
              <TextField variant="standard" label="Enter Password" />
              <TextField variant="standard" label="Enter Phone" />
              
              <LoginButton>Continue</LoginButton>
            
            </Wrapper>
          }
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
