const express=require("express");
const Session=require("../models/Session");
const Session = require("../models/Session");

// @desc - create new session and linked question
const createSession = async (req, res) => {
    try {   
        const {role, experience, topicsToFocus, description, questions}=req.body;
        const userId=req.user._id;
        const Session=new Session.create({
            user:userId,
            role, 
            experience, 
            topicsToFocus, 
            description, 
        });
        
    } catch (error) {
        return res.status(500).json({success: false, message:"Server Error"});
    }
}

// @desc - get session by id with populated question 
const getSessionById = async (req, res) => {
    try {   
    } catch (error) {
        return res.status(500).json({success: false, message:"Server Error"});
    }
}

// @desc - get all session for logged in user
const getMySessions = async (req, res) => {
    try {   
    } catch (error) {
        return res.status(500).json({success: false, message:"Server Error"});
    }    
}

// @desc - delete a session with its questions
const deleteSession = async (req, res) => {
    try {   
    } catch (error) {
        return res.status(500).json({success: false, message:"Server Error"});
    }    
}

module.exports={createSession, getSessionById, getMySessions, deleteSession};