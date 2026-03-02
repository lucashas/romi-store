import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [googleAI({ apiKey: process.env.MY_GEMINI_KEY || 'dummy-key-for-build' })],
  model: 'googleai/gemini-2.5-flash',
});
