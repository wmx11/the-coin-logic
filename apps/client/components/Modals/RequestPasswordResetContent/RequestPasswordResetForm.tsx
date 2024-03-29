import { DocumentNode, useMutation } from '@apollo/client';
import { Stack, Text, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import GradientButton from 'components/Buttons/GradientButton';
import ErrorMessage from 'components/ErrorMessage';
import ResetPasswordButton from 'components/RequestResetPasswordOrVerification';
import { REQUEST_PASSWORD_RESET } from 'data/mutations';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useLoginFlowStore from 'store/useLoginFlowStore';
import useUserStore from 'store/useUserStore';
import { User } from 'types';
import { z } from 'zod';
import { commons } from '../../../schemas/user';

type Email = { email: z.infer<typeof commons.email> };

const RequestPasswordResetForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { isInitial, resetAll } = useLoginFlowStore((state) => state);
  const [requestPasswordReset, { data, loading, error }] = useMutation(REQUEST_PASSWORD_RESET as DocumentNode);
  const user = useUserStore((state) => state.user) as User;

  const form = useForm({
    validate: zodResolver(z.object({ email: commons.email })),
    initialValues: {
      email: user?.email || '',
    },
  });

  const handleSubmit = async ({ email }: Email) => {
    if (!email) {
      setErrorMessage('Please provide an email address');
      return null;
    }

    try {
      await requestPasswordReset({ variables: { email } });
      resetAll();
      toast.success('We have sent you an email with the instructions to reset your password.');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack spacing="md">
        {!isInitial && <ResetPasswordButton />}

        <div>
          <Text size="sm" color="dimmed">
            Enter your email address and you will receive an email with instructions on how to reset your password in a
            few minutes.
          </Text>
        </div>

        <ErrorMessage message={errorMessage} />

        <TextInput
          {...form.getInputProps('email')}
          placeholder="Your email"
          label="Email address"
          required
          size="md"
          readOnly={isInitial}
        />

        <GradientButton type="submit" size="md" loading={loading} disabled={!!data}>
          Send instructions
        </GradientButton>
      </Stack>
    </form>
  );
};

export default RequestPasswordResetForm;
