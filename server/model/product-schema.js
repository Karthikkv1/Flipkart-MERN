import mongoose from "mongoose";
//10-01-2024
const productSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique :true
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description: String,
    discount: String,
    tagline:String,

});

 const Product = mongoose.model('product',productSchema);

 export default Product;

 //File created on 10-01-2024