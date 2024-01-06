// File  created on 03-01-2024

import express from 'express';  // importing express 03-01-2023

import Connection from './database/db.js';    //DataBase connection file 04-01-2024

const app = express(); // To initialise express js

const PORT =8000;

Connection(); //Server connection that is database connection

app.listen(PORT,() => console.log(`server is running successfully on ${PORT} `))  // To use express server 03-01-2023


