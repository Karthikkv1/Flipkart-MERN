// File created on 01-03-2024 3:25PM

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20

    },
    username:{
        type:String,
        required:true,
        trim:true,
       unique:true,
       index:true,
       lowercase:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
      unique:true,
      lowercase:true
    },
    password:{
        type:String,
        required:true
   
    },
    phone:{
        type:String,
        required:true,
       
    }


});

const user = mongoose.model('user',userSchema);  //01-03-2024 3:36PM

export default user;