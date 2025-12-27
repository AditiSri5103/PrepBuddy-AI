const express=require("express");
const router= express.Router();
const[addQuestionToSession, togglePinQuestion, updateQuestionNote]=require("../controllers/quesController");
const {protect}=require("../middlewares/authMiddleware");

router.post("/add",protect,addQuestionToSession);
router.post("/:id/pin",protect,togglePinQuestion);
router.post("/:id/note",protect,updateQuestionNote);