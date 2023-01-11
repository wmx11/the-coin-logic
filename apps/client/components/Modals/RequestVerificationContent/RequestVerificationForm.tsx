import { Stack, Text, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import GradientButton from 'components/Buttons/GradientButton';
import ErrorMessage from 'components/ErrorMessage';
import RequestVerificationButton from 'components/RequestResetPasswordOrVerification/RequestVerificationButton';
import { IsSafeAuth } from 'data/api/request';
import { useState } from 'react';
import { toast } from 'react-toastify';
import routes from 'routes';
import useLoginFlowStore from 'store/useLoginFlowStore';
import { signedRequest } from 'utils/signedRequest';
import { handleErrorMessage } from 'utils/utils';
import { z } from 'zod';
import { commons } from '../../../schemas/user';

type Email = { email: z.infer<typeof commons.email> };

const RequestVerificationForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { isInitial, resetAll } = useLoginFlowStore((state) => state);

  const form = useForm({
    validate: zodResolver(z.object({ email: commons.email })),
    initialValues: {
      email: '',
    },
  });

  const handleSubmit = async ({ email }: Email) => {
    if (!email) {
      setErrorMessage('Please provide an email address');
      return null;
    }
    setLoading(true);
    try {
      await signedRequest<IsSafeAuth>(
        {
          type: 'post',
          url: routes.api.user.resendVerification,
          data: {
            email,
          },
        },
        email,
        {
          signature: 'resend_verification_email',
          trusted: true,
        },
      );
      resetAll();
      toast.success('We have sent you an email with the instructions to verify your email address.');
      setErrorMessage('');
    } catch (error) {
      handleErrorMessage(error, setErrorMessage);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack spacing="md">
        {!isInitial && <RequestVerificationButton />}

        <div>
          <Text size="sm" color="dimmed">
            Enter your email address and you will receive an email with instructions on how to activate your account in
            a few minutes. If you can't find the email, please make sure you check the spam, trash, and others folder.
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

        <GradientButton type="submit" size="md" loading={loading}>
          Send instructions
        </GradientButton>
      </Stack>
    </form>
  );
};

export default RequestVerificationForm;
