const mongoose=require("mongoose")

const sessionSchema=new mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
        role: {type: String, reaquired: true},
        experience: {type: String, reaquired: true},
        topicToFocus:  {type: String, reaquired: true},
        description: String,
        question: {type: mongoose.Schema.Types.ObjectId, ref:"Question"}

    },
    {timestamps:true}
);
module.exports=mongoose.model("Session", sessionSchema) 