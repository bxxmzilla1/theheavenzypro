import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generatePrototype = async (featureList: string[]): Promise<string> => {
  const model = "gemini-2.5-flash";
  
  const prompt = `
    You are a world-class senior frontend engineer and UI/UX designer.
    Create a single-file HTML prototype (HTML, CSS in <style>, JS in <script>) for a web application that includes the following features:
    ${featureList.join(', ')}.

    THEME REQUIREMENTS:
    - Use a "Luxury Black & Gold" theme.
    - Background: Pure Black (#000000).
    - Accents: Gold Gradients (#F5C26B to #D8891C).
    - Font: San-serif, modern, elegant (e.g., Inter or system fonts).
    - Style: Glassmorphism, minimalist, high-end, expensive feel.
    
    OUTPUT REQUIREMENTS:
    - Return ONLY the raw HTML code. Do not wrap in markdown code blocks.
    - The code must be responsive and functional (mock functionality).
    - Use placeholders for images (https://picsum.photos/...).
    - Do not add explanations. Just the code.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    
    let text = response.text || '';
    
    // Clean up if the model adds markdown backticks despite instructions
    text = text.replace(/^```html/, '').replace(/^```/, '').replace(/```$/, '');
    
    return text;
  } catch (error) {
    console.error("Error generating prototype:", error);
    throw new Error("Failed to generate prototype.");
  }
};
