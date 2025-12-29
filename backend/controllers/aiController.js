const { GoogleGenAI } = require("@google/genai");
const { conceptExplainPrompt, questionAnswerPrompt } = require("../utils/prompts");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY_API });

const generateInterviewQuestions = async (req, res) => {
    try {
        const { role, experience, topicsToFocus, noOfQuestions } = req.body;
        if (!role || !experience || !topicsToFocus || !noOfQuestions) {
            return res.status(400).json({ success: false, message: "Required fields missing" });
        }
        const prompt = questionAnswerPrompt(role, experience, topicsToFocus, noOfQuestions);
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash-lite",
            contents: [
                {
                    role: "user",
                    parts: [{ text: prompt }],
                },
            ],
        });
        let text = response.text;
        const cleanText = text.replace(/^```json\s*/, "").replace(/```$/, "").trim();
        const data = JSON.parse(cleanText);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Failed to generate questions.", error: error.message });
    }
}
const generateConceptExplanation = async (req, res) => {
    try {

    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

module.exports = { generateInterviewQuestions, generateConceptExplanation };