// 2:36PM 01-03-2024 File created

import express from 'express';

import { userSignup , userLogin } from '../controller/user-controller.js';  //01-03-2024 2:52PM //Updated on 02-03-2024 1:46PM
import { getProducts } from '../controller/product-controller.js'; //06-05-2024 9:52PM

const router =express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);                                     //02-03-2024 1:16PM 

router.get('/products',getProducts);   //06-05-2024 9:48PM 

export default router;