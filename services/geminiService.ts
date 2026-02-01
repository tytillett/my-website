import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../data";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (
  userMessage: string,
  history: { role: 'user' | 'model', text: string }[] = []
): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    const response = await ai.models.generateContent({
        model: model,
        config: {
            systemInstruction: RESUME_CONTEXT,
        },
        contents: [
            ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
            { role: 'user', parts: [{ text: userMessage }] }
        ]
    });

    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I apologize, but I'm having trouble connecting to my AI services right now. Please try again later.";
  }
};