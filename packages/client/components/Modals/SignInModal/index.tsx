import { Button, Modal, PasswordInput, Space, Stack, Text, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { signIn } from 'next-auth/react';
import React, { FC, useState } from 'react';
import { UserLogin, userLoginSchema } from '../../../schemas/user';

type SignInModalProps = {
  opened: boolean;
  setOpened: (value: boolean) => void;
};

const SignInModal: FC<SignInModalProps> = ({ opened, setOpened }) => {
  const [showFormError, setShowFormError] = useState(false);

  const form = useForm({
    validate: zodResolver(userLoginSchema),
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async ({ email, password }: UserLogin) => {
    const data = await signIn('credentials', { redirect: false, email, password });

    if (data?.ok && data?.status === 200) {
      if (showFormError) {
        setShowFormError(false);
      }
      return setOpened(false);
    }

    if (!data?.ok) {
      setShowFormError(true);
    }
  };

  return (
    <Modal centered opened={opened} onClose={() => setOpened(false)} title="Sign In">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stack spacing="md">
          <div>
            <Text size="sm" color="dimmed">
              New to The Coin Logic? Create an account
            </Text>
          </div>
          {showFormError && (
            <Text size="sm" color="red">
              Your email address or password is invalid. Please try again.
            </Text>
          )}
          <TextInput {...form.getInputProps('email')} placeholder="Your email" label="Email address" required />
          <PasswordInput {...form.getInputProps('password')} placeholder="Password" label="Password" required />
          <Button type="submit" color="violet">
            Sign In
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};

export default SignInModal;
