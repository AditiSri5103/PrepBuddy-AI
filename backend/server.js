const express=require('express');
require("dotenv").config();
const cors=require("cors");
const path=require("path");
const connectDB = require('./config/db');
const authRoutes=require('./routes/authRoutes');
const sessionRoutes=require('./routes/sessionRoutes');
const quesRoutes=require('./routes/quesRoutes');
const {protect}=require("./middlewares/authMiddleware");
const { generateInterviewQuestions, generateConceptExplanation }=require("./controllers/aiController");


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
app.use("/api/questions", quesRoutes);
app.use("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.use("/api/ai/generate-explanation", protect, generateConceptExplanation);

const PORT=process.env.PORT || 5000 ;


app.listen(PORT,()=>console.log(`server running on port ${PORT}`));