// File  created on 03-01-2024

import express, { Router } from 'express';  // importing express 03-01-2023

import Connection from './database/db.js';    //DataBase connection file 04-01-2024

import dotenv from 'dotenv';   //10-01-2024
import DefaultData from './default.js'; //10-01-2024

import cors from 'cors'; //01-03-2024 3:03PM
import bodyParser from 'body-parser'; //01-03-2024 3:15PM

import router from './routes/route.js'; //01-03-2024 2:44PM

const app = express(); // To initialise express js

dotenv.config(); //10-01-2024 initializing dotenv

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',router);  //01-03-2024 2:45PM

const PORT =;

const USERNAME = process.env.DB_USERNAME;        //10-01-2024
const PASSWORD = process.env.DB_PASSWORD;  //10-01-2024

Connection(USERNAME, PASSWORD); //Server connection that is database connection

app.listen(PORT,() => console.log(`server is running successfully on ${PORT} `));  // To use express server 03-01-2023

DefaultData(); //10-01-2024


