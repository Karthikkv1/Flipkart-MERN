// 01-03-2024 2:12PM File created 

import axios from 'axios';

const URL = 'http://localhost:8000';

export const authenticateSignup = async (data) => {
    try{
  return  await axios.post(`${URL}/signup`,data);
    }
    catch(error){
        console.log('Error while calling signup api ', error);
    }
}

//02-03-2024 1:37PM 
export const authenticateLogin = async (data) => {
  try{
return  await axios.post(`${URL}/login`,data);
  }
  catch(error){
      console.log('Error while calling login api ', error);
      return error.response;
      
  }
}