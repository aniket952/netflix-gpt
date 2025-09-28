// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });

// // const response = openai.responses.create({
// //   model: "gpt-3.5-turbo",
// //   input: "write a haiku about ai",
// //   store: true,
// // });

// // response.then((result) => console.log(result.output_text));
// export default openai;

import {GoogleGenAI} from '@google/genai';
const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

const openai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

export default openai
