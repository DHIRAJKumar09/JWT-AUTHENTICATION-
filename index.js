const express = require('express');
const app=express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const verifyToken = require('./MiddleWare/Auth')
const router = require('./Routes/UserRoute');
require('dotenv').config({ path: './utils/config.env' });

app.use(cors());
app.use(express.json());
require('dotenv').config();

mongoose.connect('mongodb://127.0.0.1:27017/E-comme')
.then(()=>{console.log("database is connect")})
.catch((error)=>{console.log(error)});

console.log(process.env.JWT_SECRET)

app.use('/curd/',router);

app.get("/",(req,res)=>{
    res.send("you get your product");

})
app.listen(5000,()=>console.log("app is listen at port 5000"));