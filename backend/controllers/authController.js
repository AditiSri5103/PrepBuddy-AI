const jwt=require("jsonwebtoken");

const generateToken= (userId)=>{
    return jwt.sign({id : userId}, process.env.JWT_TOKEN, {expiry:"7d"});
}

const registerUser = async (req, res) => {
    console.log("User registered");
    
}

const loginUser = async (req, res) => {
    console.log("Login successful");
    
}

const getUserProfile = async (req, res) => {
    console.log("User profile successful");
    
}

module.exports={registerUser, loginUser, getUserProfile};