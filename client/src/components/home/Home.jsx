

//Components
import NavBar from './NavBar';
import Banner from './Banner';

import {Box,styled} from '@mui/material';

const Component = styled(Box)
`
padding :10px 10px;
background: #F2F2F2;
`

const Home =()=>{
    //Wrapping navbar and banner inside div 3-01-2024
    // We placed banner inside component because to give extra padding to banner 02-01-2024
    return(
      <>       
        <NavBar/>
        <Component> 
        <Banner/>
        </Component>
       
      </>
      
    )
}

export default Home;