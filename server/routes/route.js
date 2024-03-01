// 2:36PM 01-03-2024 File created

import express from 'express';

import { userSignup } from '../controller/user-controller.js';  //01-03-2024 2:52PM

const router =express.Router();

router.post('/signup',userSignup);

export default router;