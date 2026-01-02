const OpenAI = require("openai");
const { conceptExplainPrompt, questionAnswerPrompt } = require("../utils/prompts");

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

const parseAIJson = (rawText) => {
    if (!rawText) throw new Error("Empty AI response");

    const cleaned = rawText.replace(/^```json\s*/i, "").replace(/```$/i, "").trim();

    return JSON.parse(cleaned);
};

const generateInterviewQuestions = async (req, res) => {
    try {
        const { role, experience, topicsToFocus, noOfQuestions } = req.body;

        if (!role || !experience || !topicsToFocus || !noOfQuestions) {
            return res.status(400).json({
                success: false,
                message: "Required fields missing",
            });
        }

        const prompt = questionAnswerPrompt(
            role,
            experience,
            topicsToFocus.join(", "),
            noOfQuestions
        );

        const response = await client.responses.create({
            model: "openai/gpt-oss-20b",
            input: prompt,
            max_output_tokens: 1500,
            temperature: 0.3,
        });

        const rawText = response.output_text;

        const data = parseAIJson(rawText);

        return res.status(200).json({
            success: true,
            data,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to generate questions",
            error: error.message,
        });
    }
};

const generateConceptExplanation = async (req, res) => {
    try {
        const { question } = req.body;

        if (!question) {
            return res.status(400).json({
                success: false,
                message: "Question is required",
            });
        }

        const prompt = conceptExplainPrompt(question);

        const response = await client.responses.create({
            model: "openai/gpt-oss-20b",
            input: prompt,
            max_output_tokens: 1500,
            temperature: 0.3,
        });

        const rawText = response.output_text;

        const data = parseAIJson(rawText);

        return res.status(200).json({
            success: true,
            data,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to generate explanation",
            error: error.message,
        });
    }
};

module.exports = {
    generateInterviewQuestions,
    generateConceptExplanation,
};
