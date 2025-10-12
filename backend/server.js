const express=require('express');
require("dotenv").config();
const cors=require("cors");
const path=require("path");
const connectDB = require('./config/db');

const app=express();

app.use(cors(
    {
        origin:"*",
        methods:["GET","POST","DELETE","PUT"],
        allowedHeaders:["Content-Type", "Authorization"]
    }
));

connectDB()

app.use(express.json())

const PORT=process.env.PORT || 5000 


app.listen(PORT,()=>console.log(`server running on port ${PORT}`))