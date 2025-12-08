const express=require("express");
const Session=require("../models/Session")


const createSession = async (req, res) => {
    try {   
    } catch (error) {
        return res.status(500).json({success: false, message:"Server Error"});
    }
}
const getSessionById = async (req, res) => {
    try {   
    } catch (error) {
        return res.status(500).json({success: false, message:"Server Error"});
    }
}
const getMySessions = async (req, res) => {
    try {   
    } catch (error) {
        return res.status(500).json({success: false, message:"Server Error"});
    }    
}
const deleteSession = async (req, res) => {
    try {   
    } catch (error) {
        return res.status(500).json({success: false, message:"Server Error"});
    }    
}

module.exports={createSession, getSessionById, getMySessions, deleteSession};