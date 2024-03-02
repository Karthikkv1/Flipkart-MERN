

// components
import Header from './components/header/Header'; // Header

import Home from './components/home/Home';

import DataProvider from './context/DataProvider'; //01-03-2024 9:35PM

import {Box} from '@mui/material';



function App() {
  return (
    <DataProvider >
     <Header/>
     <Box style={{marginTop: 54}}>
      <Home/>
      </Box>
     
    </DataProvider>
  );
}

export default App;
