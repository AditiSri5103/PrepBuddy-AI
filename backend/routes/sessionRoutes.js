const express=require("express");
const {createSession, getSessionById, getMySessions, deleteSession} = require("../controllers/sessionController");

const router=express.Router;
const {protect}=require("../middlewares/authMiddleware");

router.get("/my-sessions", protect, getMySessions);
router.post("/create", protect, createSession);
router.post("/:id", protect, getSessionById);
router.post("/:id", protect, deleteSession);