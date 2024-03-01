// File created on 01-03-2024 2:50PM

import User from "../model/user-schema.js";

export const  userSignup = async(request,response) =>{
    try{
        // console.log(request.body);

     const exist = await User.findOne({username: request.body.username});

     if(exist){
        return response.status(401).json({message: 'UserName Already exist'});
     }


        const user =request.body;
        const newUser = new User(user);   //01-03-2024 3:39PM
        await newUser.save(); //Save function is used to save values in database

        response.status(200).json({message: user});


    }
    catch(error){
        response.status(500).json({message:error.message});



    }

}

