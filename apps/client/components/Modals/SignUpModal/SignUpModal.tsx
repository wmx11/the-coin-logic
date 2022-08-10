import { DocumentNode, useMutation } from '@apollo/client';
import { Button, Center, Checkbox, Modal, PasswordInput, Space, Stack, Text, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import React, { FC } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { CREATE_USER } from '../../../data/mutations';
import { User, userSchema } from '../../../schemas/user';

type SignUpModalProps = {
  opened: boolean;
  setOpened: (value: boolean) => void;
};

const SignUpModal: FC<SignUpModalProps> = ({ opened, setOpened }) => {
  const form = useForm({
    validate: zodResolver(userSchema),
    initialValues: {
      username: '',
      email: '',
      password: '',
      referral: '',
      subscribeToEmail: false,
    },
  });

  const [registeruser, { data, loading, error }] = useMutation(CREATE_USER as DocumentNode);

  const handleSubmit = ({ username, email, password, referral, subscribeToEmail }: User) => {
    try {
      registeruser({
        variables: { name: username, email, password, referral, isSubscribedToEmail: subscribeToEmail },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal centered opened={opened} onClose={() => setOpened(false)} title="Create an account">
      {data && !error ? (
        <>
          <Center className="my-8 block">
            <BsCheck2Circle size={60} color="#7950f2" />
          </Center>
          <Center>
            <Text>Thank you for registering on The Coin Logic!</Text>
          </Center>
        </>
      ) : (
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
            <TextInput {...form.getInputProps('username')} placeholder="Username" label="Username" required />
            <TextInput {...form.getInputProps('email')} placeholder="Your email" label="Email address" required />
            <PasswordInput
              {...form.getInputProps('password')}
              placeholder="Password"
              label="Password"
              description="Password should contain both letter and numbers, at least 1 uppercase letter, with minimum length of 8 characters"
              required
            />

            <TextInput
              {...form.getInputProps('referral')}
              placeholder="Enter referral ID"
              label="Referral ID (Optional)"
            />

            <Checkbox
              {...form.getInputProps('subscribeToEmail', { type: 'checkbox' })}
              color="violet"
              label="Receive The Coin Logic updates, reports, and alerts to your inbox."
            />

            <Button type="submit" color="violet" loading={loading}>
              Create an account
            </Button>

            <Text size="sm" align="center">
              By proceeding, you agree to The Coin Logic's Terms of Use & Privacy Policy.
            </Text>
          </Stack>
        </form>
      )}
    </Modal>
  );
};

export default SignUpModal;
