const express = require("express");
const Session = require("../models/Session");
const Question = require("../models/Question");


// @desc - create new session and linked question
const createSession = async (req, res) => {
    try {
        const { role, experience, topicsToFocus, description, questions } = req.body;
        const userId = req.user._id;
        const session = await Session.create({
            user: userId,
            role,
            experience,
            topicsToFocus,
            description,
        });



        const questionDocs = await Promise.all(
            questions.map(async (q, index) => {
                const question = await Question.create({
                    session: session._id,
                    question: q.question,
                    answer: q.answer,
                });
                return question._id;
            })
        );


        session.questions = questionDocs;
        await session.save();
        return res.status(201).json({ success: true, session });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

// @desc - get session by id with populated question 
const getSessionById = async (req, res) => {
    try {
        const sessionId=req.params.id;
        const session=await Session.findById(sessionId)
        .populate({
            path: "questions",
            options: {sort :{isPinned:-1, createdAt: 1}}
        }).exec();

        if(!session){
            return res.status(404).json({success: false, message:"Session not found."});
        }
        
        res.status(200).json({success: true, session});

    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}

// @desc - get all session for logged in user
const getMySessions = async (req, res) => {
    try {
        const userId=req.user._id;
        const sessions=await Session.find({user: userId}).populate("questions").sort({createdAt:-1});
        res.status(200).json({success: true, sessions});
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

// @desc - delete a session with its questions
const deleteSession = async (req, res) => {
    
    try {
        const sessionId=req.params.id;
        const session=await Session.findById(sessionId);
        if(!session){
            return res.status(404).json({success:false, message:"Session not found."})
        }
        //checking if logged-in user owns the session
        if(req.user.id != session.user.toString()){
            return res.status(403).json({success:false, message: "Not authorized to delete this session."})
        }
        //firstly deleting all questions of a session and then the session
        await Question.deleteMany({session : session._id});
        await session.deleteOne();
        res.status(200).json({success: true, message: "Session deleted successfully."});

    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}

module.exports = { createSession, getSessionById, getMySessions, deleteSession };