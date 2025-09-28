import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export async function generateFromGemini(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  const finalPrompt = `
The user will ask about movies give 5 movies only.
 explanations, don't include any other text ot work or char only movies name no space also.Task: Return only the movie titles in a single line, comma-separated, with no
User query: "${prompt}"
`;
  const result = await model.generateContent(finalPrompt);
  return result.response.text();
}
