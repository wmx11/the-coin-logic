import { Button, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import ErrorMessage from 'components/ErrorMessage';
import ResetPasswordButton from 'components/ResetPasswordButton';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import useLoginFlowStore from 'store/useLoginFlowStore';
import { UserLogin, userLoginSchema } from '../../../schemas/user';
import { toast } from 'react-toastify';

const ERROR_MESSAGE = 'Your email address or password is invalid. Please try again.';

const SignInContent = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { setRegister, resetAll } = useLoginFlowStore((state) => state);

  const form = useForm({
    validate: zodResolver(userLoginSchema),
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async ({ email, password }: UserLogin) => {
    try {
      const data = await signIn('credentials', { redirect: false, email, password });
      if (data?.status === 401) {
        setErrorMessage(ERROR_MESSAGE);
      }

      if (data?.status === 200) {
        toast.success('You have successfully logged in!');
        setErrorMessage('');
        resetAll();
      }
    } catch (error) {
      toast.error('Uh oh, looks like there was an issue logging in');
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

        <Button type="submit" color="violet" size="md">
          Sign In
        </Button>
      </Stack>
    </form>
  );
};

export default SignInContent;