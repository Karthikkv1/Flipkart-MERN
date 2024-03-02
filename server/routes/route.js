// 2:36PM 01-03-2024 File created

import express from 'express';

import { userSignup ,userLogin } from '../controller/user-controller.js';  //01-03-2024 2:52PM //Updated on 02-03-2024 1:46PM

const router =express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);                                     //02-03-2024 1:16PM 

export default router;