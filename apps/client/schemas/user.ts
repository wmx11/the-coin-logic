import { z } from 'zod';

const commons = {
  email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Email is invalid.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
};

export const userSchema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 3 characters long.' }).max(24),
  email: commons.email,
  password: commons.password.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/, {
    message:
      'Password should contain both letter and numbers, at least 1 uppercase letter, with minimum length of 8 characters',
  }),
  referrer: z.string(),
  subscribeToEmail: z.boolean(),
});

export const userLoginSchema = z.object({
  email: commons.email,
  password: commons.password,
});

export type User = z.infer<typeof userSchema>;
export type UserLogin = z.infer<typeof userLoginSchema>;
