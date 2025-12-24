
import type { AIModel } from './types';

export const MODELS: AIModel[] = [
  {
    id: 'llama3-70b',
    name: 'Llama 3 70B',
    description: 'A powerful and versatile model, great for complex reasoning and coding.',
    geminiModel: 'gemini-2.5-pro',
  },
  {
    id: 'mixtral-8x7b',
    name: 'Mixtral 8x7B',
    description: 'A sparse mixture-of-experts model known for its efficiency and speed.',
    geminiModel: 'gemini-2.5-flash',
  },
  {
    id: 'phi-3-mini',
    name: 'Phi-3 Mini',
    description: 'A lightweight yet capable model, perfect for quick tasks and summarization.',
    geminiModel: 'gemini-2.5-flash',
  },
  {
    id: 'gemma-7b',
    name: 'Gemma 7B',
    description: 'A state-of-the-art open model from Google, balanced for performance.',
    geminiModel: 'gemini-2.5-flash',
  },
];
