import { DocumentNode, useMutation } from '@apollo/client';
import { Button, Checkbox, PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import GradientButton from 'components/Buttons/GradientButton';
import ErrorMessage from 'components/ErrorMessage';
import { REF_COOKIE_NAME } from 'constants/general';
import { getCookie } from 'cookies-next';
import useRecaptcha from 'hooks/useRecaptcha';
import { useMemo } from 'react';
import { toast } from 'react-toastify';
import routes from 'routes';
import useLoginFlowStore from 'store/useLoginFlowStore';
import { CREATE_USER } from '../../../data/mutations';
import { User, userSchema } from '../../../schemas/user';

const SignUpModalForm = () => {
  const { validate, errorMessage } = useRecaptcha();
  const [registeruser, { data, loading, error }] = useMutation(CREATE_USER as DocumentNode);
  const { setSuccess, setLogin } = useLoginFlowStore((state) => state);

  const refCookie = useMemo(() => {
    return getCookie(REF_COOKIE_NAME);
  }, []);

  const form = useForm({
    validate: zodResolver(userSchema),
    initialValues: {
      username: '',
      email: '',
      password: '',
      referrer: (refCookie as string) || '',
      subscribeToEmail: false,
    },
  });

  const handleSubmit = async ({ username, email, password, referrer, subscribeToEmail }: User) => {
    try {
      const { isValid, ip } = await validate();

      if (!isValid) {
        return null;
      }

      await registeruser({
        variables: { name: username, email, password, referrer, isSubscribedToEmail: subscribeToEmail, ip },
      });

      setSuccess(true);

      toast.success('You have successfully registered! You may log in now.');
    } catch (e) {
      console.log(e);
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
            onClick={() => setLogin(true)}
          >
            Have an account? Sign in!
          </Button>
        </div>

        <ErrorMessage message={errorMessage} />

        <TextInput {...form.getInputProps('username')} placeholder="Username" label="Username" required size="md" />
        <TextInput {...form.getInputProps('email')} placeholder="Your email" label="Email address" required size="md" />
        <PasswordInput
          {...form.getInputProps('password')}
          placeholder="Password"
          label="Password"
          description="Password should contain both letter and numbers, at least 1 uppercase letter, with minimum length of 8 characters"
          required
          size="md"
        />

        <TextInput
          {...form.getInputProps('referrer')}
          placeholder="Enter referrer ID"
          label="Referrer ID (Optional)"
          size="md"
        />

        <Checkbox
          {...form.getInputProps('subscribeToEmail', { type: 'checkbox' })}
          color="violet"
          label="Receive The Coin Logic updates, reports, and alerts to your inbox."
          size="md"
        />

        <GradientButton type="submit" loading={loading} size="md">
          Create an account
        </GradientButton>

        <Text size="sm" align="center">
          By proceeding, you agree to The Coin Logic's{' '}
          <Text variant="link" component="a" href={routes.termsOfServices}>
            Terms of Services
          </Text>{' '}
          &{' '}
          <Text variant="link" component="a" href={routes.privacyPolicy}>
            Privacy Policy
          </Text>
        </Text>
      </Stack>
    </form>
  );
};

export default SignUpModalForm;
