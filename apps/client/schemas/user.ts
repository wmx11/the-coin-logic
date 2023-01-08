import { z } from 'zod';

const trimString = (u: unknown) => (typeof u === 'string' ? u.trim() : u);

export const commons = {
  username: z.string().min(3, { message: 'Username must be at least 3 characters long.' }).max(24),
  firstName: z.string().min(2, { message: 'First Name must be at least 2 characters long.' }).max(24).optional().or(z.literal('')),
  lastName: z.string().min(2, { message: 'Last Name must be at least 2 characters long.' }).max(24).optional().or(z.literal('')),
  email: z.preprocess(
    trimString,
    z
      .string()
      .min(1, { message: 'Email is required.' })
      .email({ message: 'Email is invalid.' })
      .max(64, { message: 'Email cannot be longer than 64 characters.' }),
  ),

  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long.' })
    .max(34, { message: 'Password cannot be longer than 34 characters.' }),
  subscribeToEmail: z.boolean(),
};

export const userSchema = z.object({
  username: commons.username,
  email: commons.email,
  password: commons.password.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/, {
    message:
      'Password should contain both letter and numbers, at least 1 uppercase letter, with minimum length of 8 characters',
  }),
  referrer: z.string(),
  subscribeToEmail: commons.subscribeToEmail,
});

export const userLoginSchema = z.object({
  email: commons.email,
  password: commons.password,
});

export const userProfileSchema = z.object({
  username: commons.username,
  firstName: commons.firstName,
  lastName: commons.lastName,
  subscribeToEmail: commons.subscribeToEmail,
  walletAddress: z
    .string()
    .min(42, { message: "Invalid wallet address. Make sure it's 42 characters long and has no spaces." })
    .max(42)
    .optional().or(z.literal('')),
});

export const userOrderSchema = z.object({
  firstName: commons.firstName,
  lastName: commons.lastName,
  paymentNetwork: z.number(),
  paymentCurrency: z.string(),
  paymentContractAddress: z.string(),
  paymentDecimals: z.number(),
  duration: z.string(),
});

export type User = z.infer<typeof userSchema>;
export type UserLogin = z.infer<typeof userLoginSchema>;
export type UserProfile = z.infer<typeof userProfileSchema>;
export type UserOrder = z.infer<typeof userOrderSchema>;
