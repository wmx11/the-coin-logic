import { DocumentNode, useMutation } from '@apollo/client';
import { PasswordInput, Stack, Text } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import GradientButton from 'components/Buttons/GradientButton';
import ErrorMessage from 'components/ErrorMessage';
import { RESET_PASSWORD_WITH_TOKEN } from 'data/mutations';
import useResetToken from 'hooks/useResetToken';
import jwt from 'jsonwebtoken';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { z } from 'zod';
import { commons } from '../../../schemas/user';

type Password = { password: z.infer<typeof commons.password> };

type PasswordResetToken = {
  email: string;
  token: string;
};

const ResetPasswordContent = () => {
  const { token } = useResetToken();
  const [errorMessage, setErrorMessage] = useState('');
  const [resetPassword, { data, loading, error }] = useMutation(RESET_PASSWORD_WITH_TOKEN as DocumentNode);
  const router = useRouter();

  const passwordResetToken = useMemo(() => {
    try {
      return jwt.verify(token as string, process.env.NEXT_PUBLIC_PASSWORD_RESET_JWT_SECRET as string);
    } catch (error) {
      return false;
    }
  }, []) as PasswordResetToken;

  const form = useForm({
    validate: zodResolver(z.object({ password: commons.password })),
    initialValues: {
      password: '',
    },
  });

  const handleSubmit = async ({ password }: Password) => {
    if (!password) {
      setErrorMessage('Please enter a new password');
      return null;
    }

    try {
      await resetPassword({
        variables: { email: passwordResetToken.email, token: passwordResetToken.token, password },
      });

      signOut({ redirect: true, callbackUrl: '/' });
    } catch (error) {
      if (!passwordResetToken) {
        setErrorMessage(
          'Your password reset token has expired. Please generate a new one. You will be redirected to homepage shortly.',
        );
      }

      setTimeout(() => {
        router.push('/');
      }, 5000);
    }
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack spacing="md">
        <div>
          <Text size="sm" color="dimmed">
            Enter your new password below and click "Change Password" when you are done. If you are already logged in,
            you will be signed out after the change.
          </Text>
        </div>

        <ErrorMessage message={errorMessage} />

        <PasswordInput
          {...form.getInputProps('password')}
          placeholder="New password"
          label="New password"
          required
          size="md"
          withAsterisk
        />

        <GradientButton type="submit" size="md" loading={loading} disabled={!!data || !!error}>
          Change Password
        </GradientButton>
      </Stack>
    </form>
  );
};

export default ResetPasswordContent;
