
import {Box,Typography,styled} from '@mui/material';

import { navData } from '../../constants/data';

const Component = styled(Box)       //To style nav bar 02-01-2024
`
display:flex;
margin:55px 130px 0 130px;
justify-content:space-between;
`
  
const Container =styled(Box) //To give extra space to nav bar
`
padding : 12px 8px;
text-align:center; //To align image and text center
`

const Text =styled(Typography) // To change the size of the text below the image in navbar 2-1-2024
`
font-size:14px;
font-weight:600;
font-family:inherit;
`


const NavBar = () =>{
    return (
         // To display data in nav bar, like main categories of items
      <Component>     
        {
             navData.map(data => (
                <Container>
                    <img src={data.url} alt="nav" style={{width:64}}/>    
                    <Text>{data.text}</Text>            
                    
               </Container>

             ))
        }

      </Component>
    )
}

export default NavBar;
