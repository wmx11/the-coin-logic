import { Button, Modal, PasswordInput, Space, Stack, Text, TextInput } from '@mantine/core';
import React, { FC } from 'react';

type SignInModalProps = {
  opened: boolean;
  setOpened: (value: boolean) => void;
};

const SignInModal: FC<SignInModalProps> = ({ opened, setOpened }) => {
  return (
    <Modal centered opened={opened} onClose={() => setOpened(false)} title="Sign In">
      <Stack spacing="md">
        <div>
          <Text size="sm" color="dimmed">
            New to The Coin Logic? Create an account
          </Text>
        </div>
        <TextInput placeholder="Your email" label="Email address" required />
        <PasswordInput placeholder="Password" label="Password" required />
        <Button color="violet">Sign In</Button>
      </Stack>
    </Modal>
  );
};

export default SignInModal;
