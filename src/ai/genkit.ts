import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

// Usamos MY_GEMINI_KEY para evitar el prefijo reservado de Google en Firebase App Hosting
export const ai = genkit({
  plugins: [googleAI({ apiKey: process.env.MY_GEMINI_KEY || 'dummy-key-for-build' })],
  model: 'googleai/gemini-2.5-flash',
});
