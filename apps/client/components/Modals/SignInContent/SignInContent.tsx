import { Button, Divider, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import AuthGoogleButton from 'components/Auth/AuthGoogleButton';
import GradientButton from 'components/Buttons/GradientButton';
import ErrorMessage from 'components/ErrorMessage';
import ResetPasswordButton from 'components/RequestResetPasswordOrVerification';
import RequestVerificationButton from 'components/RequestResetPasswordOrVerification/RequestVerificationButton';
import { SESSION_TOKEN } from 'constants/general';
import useLocalStorage from 'hooks/useLocalStorage';
import { getSession, signIn, useSession } from 'next-auth/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useLoginFlowStore from 'store/useLoginFlowStore';
import { tokens } from 'utils/tokens/tokens';
import { UserLogin, userLoginSchema } from '../../../schemas/user';

const ERROR_MESSAGE = 'Your email address or password is invalid.';

const SignInContent = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { setRegister, resetAll, setLoginSuccess } = useLoginFlowStore((state) => state);
  const { data: session, status } = useSession();
  const [storedValue, setValue] = useLocalStorage(SESSION_TOKEN, session?.token);
  const [loading, setLoading] = useState(false);

  const verifyToken = async (token: string) =>
    await tokens.verify<{ accessToken: string; isVerified: boolean }>(
      token as string,
      process.env.NEXT_PUBLIC_SIGNED_SECRET || '',
    );

  const checkAccessToken = async () => {
    const session = await getSession();
    if (!session) {
      await new Promise((resolve) => setTimeout(() => resolve(null), 1000));
      return null;
    }
    const token = await verifyToken((session?.token as string) || '');
    setValue(token?.accessToken || '');
    toast.success('You have successfully logged in!');
    return true;
  };

  const tryCheckAccessToken = async () => {
    let tries = 0;
    const MAX_TRIES = 5;

    const retry = async () => {
      console.log(tries);

      await new Promise(async (resolve, reject) => {
        if (tries > MAX_TRIES) {
          reject('Please refresh the page and try again.');
        }

        const tokens = await checkAccessToken();

        if (!tokens) {
          tries += 1;
          await retry();
        }

        if (tokens) {
          resolve(tokens);
        }
      });
    };

    return await retry();
  };

  const form = useForm({
    validate: zodResolver(userLoginSchema),
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async ({ email, password }: UserLogin) => {
    setLoading(true);
    try {
      const data = await signIn('credentials', {
        redirect: false,
        email: email.trim(),
        password,
      });

      if (data?.status === 401) {
        setErrorMessage(ERROR_MESSAGE);
        setLoading(false);
      }

      if (data?.status === 200) {
        await tryCheckAccessToken();
        resetAll();
        setErrorMessage('');
        setLoginSuccess(true);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error('Uh oh, looks like there was an issue logging in');
      setLoading(false);
      return setErrorMessage(ERROR_MESSAGE);
    }
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack spacing="md">
        <div>
          <Button
            variant="subtle"
            color="violet"
            fullWidth
            className="cursor-pointer"
            size="sm"
            onClick={() => setRegister(true)}
          >
            Don't have an account? Sign up!
          </Button>
        </div>

        <ErrorMessage message={errorMessage} />

        <TextInput {...form.getInputProps('email')} placeholder="Your email" label="Email address" required size="md" />

        <PasswordInput {...form.getInputProps('password')} placeholder="Password" label="Password" required size="md" />

        <ResetPasswordButton />

        <RequestVerificationButton />

        <GradientButton type="submit" size="md" loading={loading}>
          Sign In
        </GradientButton>

        <Divider label="Or" labelPosition="center" />

        <AuthGoogleButton />
      </Stack>
    </form>
  );
};

export default SignInContent;
