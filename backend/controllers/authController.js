const jwt=require("jsonwebtoken");
const User = require("../models/User");
const bcrypt=require("bcryptjs");

const generateToken= (userId)=>{
    return jwt.sign({id : userId}, process.env.JWT_TOKEN, {expiry:"7d"});
}

const registerUser = async (req, res) => {
    try{
        const {name, email, password}=req.body;
        const userExits= User.findOne(email);
        if(userExits){
            res.status(400).json({message : "User already exists"});
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hash(password, salt);

        const user = User.create({
            name,
            email,
            password:hashedPassword
        })

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    }
    catch(error){
        res.status(500).json({message : "Server Error", error : error.message});
    }
    
}

const loginUser = async (req, res) => {
    console.log("Login successful");
    
}

const getUserProfile = async (req, res) => {
    console.log("User profile successful");
    
}

module.exports={registerUser, loginUser, getUserProfile};