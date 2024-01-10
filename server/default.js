
import {products} from "./constants/data.js"         //10-01-2024
import Product from "./model/product-schema.js";      //10-01-2024

const DefaultData =async()=>{
    try{
    //   await  Product.deleteMany({});    //10-01-2024
      await  Product.insertMany(products);    //10-01-2024
        console.log('Data imported successfully');

    }
    catch(error){
        console.log('Error while inserting default data', error.message);

    }

}

export default DefaultData; //10-01-2024