import { Dialog , Box ,TextField,Typography ,Button , styled} from "@mui/material";


const   Component = styled(Box) `
height:70vh;
width:90vh;
`;

const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:100%;
width:40%;
`;
const LoginDialog = ({open , setOpen}) => {
    const handleClose =() =>{
        setOpen(false);
    }
  return (
     <Dialog open={open} onClose={handleClose}>
        <Component>
            <Box style={{display:'flex',height:'100%'}}>
            <Image><Typography variant="h5">Login</Typography>
            <Typography variant="h5">Get access to your Orders, Wishlist and Recommendations</Typography>
            </Image>
            <Box>
            <TextField variant="standard" label="Enter Email/Mobile Number"/>
            <TextField variant="standard" label="Enter Password"/>
            <TextField>By continuin , you are agree to Flipkart's Terms of use and privacy Policy</TextField>
            <Button>Login</Button>
            <Typography>OR</Typography>
            <Button>Request Otp</Button>
            <Typography>New to Flipkart? Create an account</Typography>
                </Box>
                </Box>
        </Component>
        </Dialog>
     )
}

export default LoginDialog;
