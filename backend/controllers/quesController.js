const Question = require("../models/Question");
const Quesion = require("../models/Question");
const Session = require("../models/Session");

// @route   api/questions/add
exports.addQuestionToSession = async (req, res) => {
    try {
        const { sessionId, questions } = req.body;
        if(!sessionId || !questions || !Array.isArray(question)){
            return res.status(400).json({success:false, message:"Invalid input data."});
        }
        const session = await Session.findById(sessionId);
        if (!session) {
            return res.status(404).json({ success: false, message: "Session not found." })
        }
        const createdQuestions = await Question.insertMany(questions.map(q => ({
        session: sessionId,
        question: q.question,
        answer: q.answer
      })));
        const questionIds = createdQuestions.map(q => q._id);
        session.questions.push(...questionIds);
        await session.save();
        res.status(201).json({ success: true, createdQuestions });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// @route   api/questions/:id/pin
exports.togglePinQuestion = async (req, res) => {
    try {
        const questionId=req.params.id;
        const question=await Question.findById(questionId);
        if(!question){
            return res.status(404).json({success:false, message:"Question not found."});
        }
        question.isPinned=!question.isPinned;
        await question.save();
        res.status(200).json({success:true, question});
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// @route   api/questions/:id/note
exports.updateQuestionNote = async (req, res) => {
    try {
        
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
