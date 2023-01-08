import { z } from 'zod';

export const nexusProfile = z.object({
  name: z.string().min(3, { message: 'Username must be at least 3 characters long.' }).max(32),
  contactEmail: z.string().email().optional().or(z.literal('')),
  nickname: z.string().min(2, { message: 'Nickname must be at least 2 characters long.' }).max(32),
  summary: z.string().min(20, { message: 'Your short summary must be at least 20 characters long.' }).max(200),
  about: z.string().min(20, { message: 'Your about section must be at least 20 characters long.' }).max(1000),
  offers: z.optional(z.string().max(250)),
  website: z.optional(z.string()),
  twitter: z.optional(z.string()),
  telegram: z.optional(z.string()),
  discord: z.optional(z.string()),
  reddit: z.optional(z.string()),
  youtube: z.optional(z.string()),
  priceFrom: z.optional(z.number().min(0)),
  priceTo: z.optional(z.number().min(0)),
});
export type NexusProfileSchema = z.infer<typeof nexusProfile>;
