// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// const geminiResponse = async (command, assistantName, userName) => {
//   try {
//     const apiKey = process.env.GEMINI_API_KEY;
//     if (!apiKey) {
//       throw new Error("GEMINI_API_KEY is missing in .env file");
//     }

//     // ✅ FIX 1: use REAL model
//     const apiUrl =
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

//     const prompt = `
// You are a virtual assistant named ${assistantName} created by ${userName}.
// You are NOT Google.

// Understand English, Hindi, and Hinglish.
// Reply in SAME language as user.

// Respond ONLY with valid JSON.
// No markdown. No explanation.

// JSON format:
// {
//   "type": "general" | "google-search" | "youtube-search" | "youtube-play" |
//           "get-time" | "get-date" | "get-day" | "get-month" |
//           "calculator-open" | "instagram-open" | "facebook-open" | "weather-show",
//   "userInput": "<original input without assistant name>",
//   "response": "<short voice-friendly response>"
// }

// User input:
// "${command}"
// `;

//     const requestBody = {
//       contents: [
//         {
//           role: "user",
//           parts: [{ text: prompt }]
//         }
//       ]
//     };

//     const result = await axios.post(apiUrl, requestBody, {
//       headers: {
//         "Content-Type": "application/json"
//       },
//       timeout: 15000
//     });

//     let rawText =
//       result.data?.candidates?.[0]?.content?.parts?.[0]?.text;

//     if (!rawText) {
//       throw new Error("Empty response from Gemini");
//     }

//     // ✅ Clean markdown if Gemini adds it
//     rawText = rawText.replace(/```json|```/g, "").trim();

//     return JSON.parse(rawText);

//   } catch (error) {
//     // ✅ FIX 2: SHOW REAL ERROR
//     console.error("❌ Gemini FULL error:");
//     console.error(error.response?.data || error);

//     return {
//       type: "general",
//       userInput: command,
//       response: "System error. Please try again."
//     };
//   }
// };

// export default geminiResponse;

// backup code
// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// const geminiResponse = async (command, assistantName, userName) => {
//   try {
//     const apiKey = process.env.GEMINI_API_KEY;
//     if (!apiKey) {
//       throw new Error("GEMINI_API_KEY is missing in .env file");
//     }

//     const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

//     const prompt = `
// You are a smart voice assistant named ${assistantName}, 
// created by Arvind Kumar (Software Engineer, AI & Voice Assistant Builder,Sikandra, Dausa Rajasthan ) and you can search in google er arvind sikandra.
// You are NOT Google.

// You must understand and respond in:
// - English
// - Hindi
// - Hinglish (Hindi written in English)

// VERY IMPORTANT RULES:
// 1. Detect the language of the user's input automatically.
// 2. Respond in the SAME language as the user.
// 3. Respond ONLY with a valid JSON object.
// 4. Do NOT add markdown, explanation, or extra text.

// JSON format (STRICT):
// {
//   "type": "general" | "google-search" | "youtube-search" | "youtube-play" |
//           "get-time" | "get-date" | "get-day" | "get-month" |
//           "calculator-open" | "instagram-open" | "facebook-open" | "weather-show",
//   "userInput": "<original user input without assistant name>",
//   "response": "<short voice-friendly response in user's language>"
//    "voice": "male"
// }



// Intent rules:
// - If user asks something informational → type = "general"
// - Agar user bole "search", "dhoondo", "khojo" → google-search
// - Agar bole "YouTube par", "video chalao", "gaana bajao" → youtube-search or youtube-play
// - Agar bole "calculator kholo" → calculator-open
// - Agar bole "Instagram kholo" → instagram-open
// - Agar bole "Facebook kholo" → facebook-open
// - Agar bole "mausam", "weather" → weather-show
// - Agar bole "time kya hai" → get-time
// - Agar bole "aaj ka date" → get-date
// - Agar bole "aaj ka din" → get-day
// - Agar bole "kaunsa month" → get-month

// Important:
// - Agar koi puche "tumhe kisne banaya" → use Arvind Kumar
// - Response short aur bolne layak hona chahiye

// Now process this user input:
// "${command}"
// `;

//     // ✅ REQUIRED FORMAT (unchanged)
//     const requestBody = {
//       contents: [
//         {
//           parts: [
//             {
//               text: prompt
//             }
//           ]
//         }
//       ]
//     };

//     const result = await axios.post(apiUrl, requestBody, {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });

//     let rawText =
//       result.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

//     // ✅ Clean Gemini output
//     rawText = rawText
//       .replace(/```json/g, "")
//       .replace(/```/g, "")
//       .trim();

//     try {
//       return JSON.parse(rawText);
//     } catch (err) {
//       console.error("JSON parse failed:", rawText);
//       return {
//         type: "general",
//         userInput: command,
//         response: "Sorry, main samajh nahi paaya."
//       };
//     }
//   } catch (error) {
//     console.error("Gemini API error:", error.response?.data || error.message);
//     return {
//       type: "general",
//       userInput: command,
//       response: "System mein thodi dikkat aa rahi hai."
//     };
//   }
// };

// export default geminiResponse;

// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// const geminiResponse = async (command, assistantName, userName) => {
//   try {
//     const apiKey = process.env.GEMINI_API_KEY;
//     if (!apiKey) {
//       throw new Error("GEMINI_API_KEY is missing in .env file");
//     }

//     // ✅ Use supported model
//     const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

//     const prompt = `
// You are a virtual assistant named ${assistantName} created by ${userName}.
// You are NOT Google.

// Respond ONLY with a valid JSON object.
// Do NOT add markdown, explanation, or extra text.

// JSON format:
// {
//   "type": "general" | "google-search" | "youtube-search" | "youtube-play" |
//           "get-time" | "get-date" | "get-day" | "get-month" |
//           "calculator-open" | "instagram-open" | "facebook-open" | "weather-show",
//   "userInput": "<original user input without assistant name>",
//   "response": "<short voice-friendly response>"
// }

// Now process this user input:
// "${command}"
// `;

//     // ✅ EXACT Gemini body format (as you asked)
//     const requestBody = {
//       contents: [
//         {
//           parts: [
//             {
//               text: prompt
//             }
//           ]
//         }
//       ]
//     };

//     const result = await axios.post(apiUrl, requestBody, {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });

//     let rawText =
//       result.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

//     // ✅ Clean Gemini output (very important)
//     rawText = rawText
//       .replace(/```json/g, "")
//       .replace(/```/g, "")
//       .trim();

//     try {
//       return JSON.parse(rawText);
//     } catch (err) {
//       console.error("JSON parse failed:", rawText);
//       return {
//         type: "general",
//         userInput: command,
//         response: "Sorry, I didn't understand that."
//       };
//     }
//   } catch (error) {
//     console.error("Gemini API error:", error.response?.data || error.message);
//     return {
//       type: "general",
//       userInput: command,
//       response: "There was a problem connecting to my brain."
//     };
//   }
// };

// export default geminiResponse;




// import axios from "axios";

// const geminiResponse = async (command, assistantName, userName) => {
//   try {
//     const apiKey = process.env.GEMINI_API_KEY;
//     if (!apiKey) {
//       throw new Error("GEMINI_API_KEY is missing in .env file");
//     }

//     const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

//     const prompt = `You are a virtual assistant named ${assistantName} created by ${userName}.
// You are not Google. You will now behave like a voice-enabled assistant.

// Your task is to understand the user's natural language input and respond with a JSON object like this:
// {
//   "type": "general" | "google-search" | "youtube-search" | "youtube-play" | "get-time" | "get-date" | "get-day" | "get-month" | "calculator-open" | "instagram-open" | "facebook-open" | "weather-show",
//   "userInput": "<original user input, without the assistant's name>",
//   "response": "<a short spoken response to read out loud to the user>"
// }

// Instructions:
// - "type": determine the intent of the user.
// - "userInput": keep the original text, but remove the assistant's name if present.
// - "response": make it short, voice-friendly (like "Sure, playing now", "Here’s what I found", etc.).

// Type meanings:
// - "general": if it's a factual or informational question. Aur agar koi aisa question puchta hai jiska answer tume pata hai, usko bhi general ki category me rakho, bas short answer dena.
// - "google-search": if user wants to search something on Google.
// - "youtube-search": if user wants to search something on YouTube.
// - "youtube-play": if user wants to directly play a video or song.
// - "calculator-open": if user wants to open a calculator.
// - "instagram-open": if user wants to open Instagram.
// - "facebook-open": if user wants to open Facebook.
// - "weather-show": if user wants to know weather.
// - "get-time": if user asks for current time.
// - "get-date": if user asks for today's date.
// - "get-day": if user asks what day it is.
// - "get-month": if user asks for the current month.

// Important:
// - Use ${userName} agar koi puche tume kisne banaya.
// - Only respond with the JSON object, nothing else.

// Now process this userInput: ${command}`;

//     const result = await axios.post(apiUrl, {
//       contents: [{ parts: [{ text: prompt }] }],
//     });

//     const rawText = result.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

//     try {
//       const parsed = JSON.parse(rawText);
//       return parsed;
//     } catch (e) {
//       console.error("Failed to parse Gemini response:", rawText);
//       return {
//         type: "general",
//         userInput: command,
//         response: "I'm sorry, I couldn't understand that. Could you please rephrase?",
//       };
//     }
//   } catch (error) {
//     console.error("Gemini API error:", error.message);
//     return {
//       type: "general",
//       userInput: command,
//       response: "There was a problem connecting to my brain. Try again later.",
//     };
//   }
// };

// export default geminiResponse;







// import axios from "axios";

// const geminiResponse = async (command, assistantName, userName) => {
//   try {
//     const apiKey = process.env.GEMINI_API_KEY;
//     if (!apiKey) {
//       throw new Error("❌ GEMINI_API_KEY is missing in .env file");
//     }

//     // ✅ Correct Gemini API endpoint
//     const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

//     const prompt = `You are a virtual assistant named ${assistantName} created by ${userName}. 
// You are not Google. You will now behave like a voice-enabled assistant.

// Your task is to understand the user's natural language input and respond with a JSON object like this:
// {
//   "type": "general" | "google-search" | "youtube-search" | "youtube-play" | "get-time" | "get-date" | "get-day" | "get-month" | "calculator-open" | "instagram-open" | "facebook-open" | "weather-show",
//   "userInput": "<original user input, without the assistant's name>",
//   "response": "<a short spoken response to read out loud to the user>"
// }

// Instructions:
// - "type": determine the intent of the user.
// - "userInput": keep the original text, but remove the assistant's name if present.
// - "response": make it short, voice-friendly (like "Sure, playing now", "Here’s what I found", etc.).

// Type meanings:
// - "general": if it's a factual or informational question. Aur agar koi aisa question puchta hai jiska answer tume pata hai, usko bhi general ki category me rakho, bas short answer dena.
// - "google-search": if user wants to search something on Google.
// - "youtube-search": if user wants to search something on YouTube.
// - "youtube-play": if user wants to directly play a video or song.
// - "calculator-open": if user wants to open a calculator.
// - "instagram-open": if user wants to open Instagram.
// - "facebook-open": if user wants to open Facebook.
// - "weather-show": if user wants to know weather.
// - "get-time": if user asks for current time.
// - "get-date": if user asks for today's date.
// - "get-day": if user asks what day it is.
// - "get-month": if user asks for the current month.

// Important:
// - Use ${userName} agar koi puche tume kisne banaya.
// - Only respond with the JSON object, nothing else.

// Now process this userInput: ${command}`;

//     const result = await axios.post(apiUrl, {
//       contents: [{ parts: [{ text: prompt }] }],
//     });

//     const rawText = result.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

//     return rawText; // ✅ Always return string
//   } catch (error) {
//     console.error("Gemini API error:", error.message);

//     // Return fallback as a JSON string (not object!)
//     return JSON.stringify({
//       type: "general",
//       userInput: command,
//       response: "There was a problem connecting to my brain. Try again later.",
//     });
//   }
// };

// export default geminiResponse;













// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// const extractJSON = (text) => {
//   try {
//     const firstBrace = text.indexOf("{");
//     const lastBrace = text.lastIndexOf("}");
//     if (firstBrace === -1 || lastBrace === -1) return null;
//     return JSON.parse(text.slice(firstBrace, lastBrace + 1));
//   } catch {
//     return null;
//   }
// };

// const geminiResponse = async (command, assistantName, userName) => {
//   try {
//     const apiKey = process.env.GEMINI_API_KEY;
//     if (!apiKey) throw new Error("GEMINI_API_KEY missing");

//     const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

//     const prompt = `
// You are a smart voice assistant named ${assistantName}, created by ${userName}.
// You are NOT Google.

// Rules:
// - Detect language automatically
// - Respond in same language
// - ONLY valid JSON output

// JSON format:
// {
//   "type": "general",
//   "userInput": "",
//   "response": ""
// }

// STRICT MODE:
// - Output ONLY JSON
// - No markdown
// - No explanation
// - No extra text

// User input:
// "${command}"
// `;

//     const result = await axios.post(apiUrl, {
//       contents: [{ parts: [{ text: prompt }] }]
//     });

//     const rawText =
//       result.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

//     const parsed = extractJSON(rawText);

//     if (!parsed) {
//       console.error("Invalid Gemini Output:", rawText);
//       return {
//         type: "general",
//         userInput: command,
//         response: "Sorry, main samajh nahi paaya."
//       };
//     }

//     return parsed;
//   } catch (error) {
//     console.error("Gemini API error:", error.response?.data || error.message);
//     return {
//       type: "general",
//       userInput: command,
//       response: "System mein thodi dikkat aa rahi hai."
//     };
//   }
// };

// export default geminiResponse;

// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// const geminiResponse = async (command, assistantName, userName) => {
//   try {
//     const apiKey = process.env.OPENAI_API_KEY;
//     if (!apiKey) {
//       throw new Error("OPENAI_API_KEY is missing in .env file");
//     }

//     const apiUrl = "https://api.openai.com/v1/responses";

//     const prompt = `
// You are a smart voice assistant named ${assistantName},
// created by Arvind Kumar (Software Engineer, AI & Voice Assistant Builder, Dausa Rajasthan).
// You are NOT Google.

// You must understand and respond in:
// - English
// - Hindi
// - Hinglish (Hindi written in English)

// VERY IMPORTANT RULES:
// 1. Detect the language of the user's input automatically.
// 2. Respond in the SAME language as the user.
// 3. Respond ONLY with a valid JSON object.
// 4. Do NOT add markdown, explanation, or extra text.

// JSON format (STRICT):
// {
//   "type": "general" | "google-search" | "youtube-search" | "youtube-play" |
//           "get-time" | "get-date" | "get-day" | "get-month" |
//           "calculator-open" | "instagram-open" | "facebook-open" | "weather-show",
//   "userInput": "<original user input without assistant name>",
//   "response": "<short voice-friendly response in user's language>",
//   "voice": "male"
// }

// Intent rules:
// - Informational question → "general"
// - "search", "dhoondo", "khojo" → "google-search"
// - "YouTube par", "video chalao", "gaana bajao" → "youtube-search" or "youtube-play"
// - "calculator kholo" → "calculator-open"
// - "Instagram kholo" → "instagram-open"
// - "Facebook kholo" → "facebook-open"
// - "mausam", "weather" → "weather-show"
// - "time kya hai" → "get-time"
// - "aaj ka date" → "get-date"
// - "aaj ka din" → "get-day"
// - "kaunsa month" → "get-month"

// Important:
// - "tumhe kisne banaya" → Arvind Kumar
// - Response short aur bolne layak ho

// Now process this user input:
// "${command}"
// `;

//     const requestBody = {
//       model: "gpt-5-nano",
//       input: prompt,
//       temperature: 0.2
//     };

//     const result = await axios.post(apiUrl, requestBody, {
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${apiKey}`
//       }
//     });

//     // ✅ ChatGPT response text nikalna
//     let rawText =
//       result.data?.output_text ||
//       result.data?.output?.[0]?.content?.[0]?.text ||
//       "";

//     rawText = rawText
//       .replace(/```json/g, "")
//       .replace(/```/g, "")
//       .trim();

//     try {
//       return JSON.parse(rawText);
//     } catch (err) {
//       console.error("JSON parse failed:", rawText);
//       return {
//         type: "general",
//         userInput: command,
//         response: "Sorry, main samajh nahi paaya.",
//         voice: "male"
//       };
//     }

//   } catch (error) {
//     console.error("ChatGPT API error:", error.response?.data || error.message);
//     return {
//       type: "general",
//       userInput: command,
//       response: "System mein thodi dikkat aa rahi hai.",
//       voice: "male"
//     };
//   }
// };

// export default geminiResponse;


import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const openRouterResponse = async (command, assistantName, userName) => {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      throw new Error("OPENROUTER_API_KEY is missing in .env file");
    }

    const apiUrl = "https://openrouter.ai/api/v1/chat/completions";

    const prompt = `
You are a smart voice assistant named ${assistantName}, 
created by Arvind Kumar (Software Engineer, AI & Voice Assistant Builder, Sikandra, Dausa Rajasthan).
You are NOT Google.

You must understand and respond in:
- English
- Hindi
- Hinglish (Hindi written in English)

VERY IMPORTANT RULES:
1. Detect the language of the user's input automatically.
2. Respond in the SAME language as the user.
3. Respond ONLY with a valid JSON object.
4. Do NOT add markdown, explanation, or extra text.

JSON format (STRICT):
{
  "type": "general" | "google-search" | "youtube-search" | "youtube-play" |
          "get-time" | "get-date" | "get-day" | "get-month" |
          "calculator-open" | "instagram-open" | "facebook-open" | "weather-show",
  "userInput": "<original user input without assistant name>",
  "response": "<short voice-friendly response in user's language>",
  "voice": "female"
}

Intent rules:
- If user asks something informational → type = "general"
- Agar user bole "search", "dhoondo", "khojo" → google-search
- Agar bole "YouTube par", "video chalao", "gaana bajao" → youtube-search or youtube-play
- Agar bole "calculator kholo" → calculator-open
- Agar bole "Instagram kholo" → instagram-open
- Agar bole "Facebook kholo" → facebook-open
- Agar bole "mausam", "weather" → weather-show
- Agar bole "time kya hai" → get-time
- Agar bole "aaj ka date" → get-date
- Agar bole "aaj ka din" → get-day
- Agar bole "kaunsa month" → get-month

Important:
- Agar koi puche "tumhe kisne banaya" → use Arvind Kumar
- Response short aur bolne layak hona chahiye

Now process this user input:
"${command}"
`;

    const requestBody = {
      model: "xiaomi/mimo-v2-flash:free",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      reasoning: {
        enabled: false
      }
    };

    const result = await axios.post(apiUrl, requestBody, {
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      }
    });

    let rawText =
      result.data?.choices?.[0]?.message?.content || "";

    rawText = rawText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    try {
      return JSON.parse(rawText);
    } catch (err) {
      console.error("JSON parse failed:", rawText);
      return {
        type: "general",
        userInput: command,
        response: "Sorry, main samajh nahi paaya.",
        voice: "female"
      };
    }
  } catch (error) {
    console.error("OpenRouter API error:", error.response?.data || error.message);
    return {
      type: "general",
      userInput: command,
      response: "System mein thodi dikkat aa rahi hai.",
      voice: "female"
    };
  }
};

export default openRouterResponse;
