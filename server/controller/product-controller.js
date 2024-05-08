
// File created on 06-05-2024 9:50PM

import Product from '../model/product-schema.js';

export const getProducts = async (request,response) =>{
    try{
       const products = await  Product.find({});

       response.status(200).json(products);  //To display the products on the frontend
    }
    catch(error){

        response.status(500).json({ message: error.message});
    }

}