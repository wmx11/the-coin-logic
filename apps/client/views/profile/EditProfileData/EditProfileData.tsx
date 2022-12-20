import { DocumentNode, useMutation } from '@apollo/client';
import { Button, Checkbox, Stack, TextInput, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import ErrorMessage from 'components/ErrorMessage';
import GoBack from 'components/GoBack';
import { UPDATE_USER_BY_EMAIL } from 'data/mutations';
import useRecaptcha from 'hooks/useRecaptcha';
import { toast } from 'react-toastify';
import { UserProfile, userProfileSchema } from 'schemas/user';
import useUserStore from 'store/useUserStore';
import { User } from 'types';

const EditProfileData = () => {
  const { validate, errorMessage } = useRecaptcha();
  const user = useUserStore((state) => state.user) as User;
  const setUser = useUserStore((state) => state.setUser);
  const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER_BY_EMAIL as DocumentNode);

  const form = useForm({
    validate: zodResolver(userProfileSchema),
    initialValues: {
      username: user?.name || '',
      firstName: user?.firstName || null,
      lastName: user?.lastName || null,
      subscribeToEmail: user?.isSubscribedToEmail,
      walletAddress: user?.walletAddress,
    },
  });

  const handleSubmit = async ({ username, firstName, lastName, subscribeToEmail, walletAddress }: UserProfile) => {
    try {
      const { isValid } = await validate();

      if (!isValid) {
        return null;
      }

      const updatedUser = await updateUser({
        variables: {
          email: user.email,
          name: username,
          firstName: firstName || '',
          lastName: lastName || '',
          isSubscribedToEmail: subscribeToEmail,
          walletAddress: walletAddress || '',
        },
      });

      if (updatedUser) {
        setUser({ ...user, ...updatedUser.data.updateUser });
        toast.success('Your data has been saved successfully!');
        form.resetDirty();
      }
    } catch (e) {
      toast.error('Looks like there has been an issue updating your profile information!');
      console.log(e);
    }
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values as UserProfile))} className="w-full">
      <Stack spacing="xl">
        <GoBack />
        <Title order={2}>Edit Profile</Title>

        <ErrorMessage message={errorMessage} />

        <TextInput {...form.getInputProps('username')} placeholder="Username" label="Username" size="md" />

        <TextInput {...form.getInputProps('firstName')} placeholder="First Name" label="First Name" size="md" />

        <TextInput {...form.getInputProps('lastName')} placeholder="Last Name" label="Last Name" size="md" />

        <TextInput
          {...form.getInputProps('walletAddress')}
          placeholder="Wallet Address"
          label="Wallet Address"
          description="Your wallet address will be used to send you referral payments"
          size="md"
        />

        <Checkbox
          {...form.getInputProps('subscribeToEmail', { type: 'checkbox' })}
          color="violet"
          label="Receive The Coin Logic updates, reports, and alerts to your inbox."
          size="md"
        />

        <Button type="submit" color="violet" loading={loading} size="md" disabled={!form.isDirty()}>
          Save
        </Button>
      </Stack>
    </form>
  );
};

export default EditProfileData;
