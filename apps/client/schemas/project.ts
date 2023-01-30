import { z } from 'zod';

export const projectSchema = z.object({
  name: z.string().min(2, { message: 'Please provide a valid name' }).max(100, { message: 'Project name is too long' }),
  contractAddress: z.string(),
  networkId: z.string(),
  maxSupply: z.number(),
  paymentPlanId: z.string(),
  isNft: z.boolean(),
  isPreLaunch: z.boolean(),
  launchDate: z.date(),
  pairAddress: z.string(),
  description: z
    .string()
    .min(50, { message: 'Description must be at least 50 characters long.' })
    .max(5000, { message: 'Description is too long.' }),
  preLaunchInformation: z.string(),
  kycLink: z.string(),
  auditLink: z.string(),
  website: z.string().min(2, { message: 'Please provide your project website.' }),
  whitepaper: z.string().min(2, { message: 'Please provide a link to your whitepaper.' }),
  twitter: z.string(),
  telegram: z.string(),
  discord: z.string(),
  reddit: z.string(),
  youtube: z.string(),
  medium: z.string(),
});

export type ProjectSchema = z.infer<typeof projectSchema>;
