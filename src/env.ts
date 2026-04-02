import { z } from 'zod';

const envSchema = z.object({
  GEMINI_API_KEY: z.string().optional(),
  APP_URL: z.string().url().optional(),
});

export const env = envSchema.parse({
  GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY,
  APP_URL: import.meta.env.VITE_APP_URL || process.env.APP_URL,
});
