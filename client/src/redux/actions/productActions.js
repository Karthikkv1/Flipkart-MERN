//File created on 07-05-2024   9:56PM


import axios  from "axios"; 
const URL='http://localhost:8000';

export const getProducts = async() => {
    try {
 let response = await axios.get(`${URL}/products`);
 console.log(response);
    }
    catch(error){
        console.log('Error while calling getproducts api',error.message);
    }
}

