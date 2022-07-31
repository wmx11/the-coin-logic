import { Button, Checkbox, Modal, PasswordInput, Space, Stack, Text, TextInput } from '@mantine/core';
import React, { FC } from 'react';

type SignUpModalProps = {
  opened: boolean;
  setOpened: (value: boolean) => void;
};

const SignUpModal: FC<SignUpModalProps> = ({ opened, setOpened }) => {
  return (
    <Modal centered opened={opened} onClose={() => setOpened(false)} title="Create an account">
      <Stack spacing="md">
        <div>
          <Text size="sm" color="dimmed">
            Project owners! Gain access to features such as Project Listing, Project Analytics Dashboard, Historical
            Data, Holders List, Insights, and more.
          </Text>
          <Space h="md" />
          <Text size="sm" color="dimmed">
            Investors! Gain access to features such ass Watchlist, Alerts, Events, and more.
          </Text>
          <Space h="md" />
          <Text size="sm" color="dimmed">
            Already have an account?
          </Text>
        </div>
        <TextInput placeholder="Your email" label="Email address" required />
        <PasswordInput
          placeholder="Password"
          label="Password"
          description="Password should contain both letter and numbers, with minimum length of 8 characters"
          required
        />
        <TextInput placeholder="Enter referral ID" label="Referral ID (Optional)" />

        <Checkbox color="violet" label="Receive The Coin Logic updates, reports, and alerts to your inbox." />

        <Button color="violet">Create an account</Button>

        <Text size="sm" align="center">
          By proceeding, you agree to The Coin Logic's Terms of Use & Privacy Policy.
        </Text>
      </Stack>
    </Modal>
  );
};

export default SignUpModal;
