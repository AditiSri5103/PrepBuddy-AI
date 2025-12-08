const express=require('express');
require("dotenv").config();
const cors=require("cors");
const path=require("path");
const connectDB = require('./config/db');
const authRoutes=require('./routes/authRoutes')

const app=express();

app.use(cors(
    {
        origin:"*",
        methods:["GET","POST","DELETE","PUT"],
        allowedHeaders:["Content-Type", "Authorization"]
    }
));

connectDB();

app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/sessions", sessionRoutes);
// app.use("/api/quesions", quesRoutes);
// app.use("/api/ai/generate-questions", protect, generateInterviewQuestions);
// app.use("/api/ai/generate-explanation", protect, generateConceptExplanation);

const PORT=process.env.PORT || 5000 ;


app.listen(PORT,()=>console.log(`server running on port ${PORT}`));