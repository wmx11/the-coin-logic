import { Stack, Text, TextInput, Textarea, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import axios from 'axios';
import BackgroundWrapper from 'components/BackgroundWrapper';
import { SmallBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrapper';
import GradientButton from 'components/Buttons/GradientButton';
import ErrorMessage from 'components/ErrorMessage';
import Meta from 'components/Meta';
import { Discord, Twitter } from 'components/Socials/Socials';
import GradientTitle from 'components/Text/GradientTitle';
import TrackVitalsDisclaimer from 'components/TrackVitalsDisclaimer';
import useRecaptcha from 'hooks/useRecaptcha';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { commons } from 'schemas/user';
import { z } from 'zod';

const index = () => {
  const { validate, errorMessage } = useRecaptcha();
  const [isDisabled, setIsDisabled] = useState(false);

  const contactUsSchema = z.object({
    email: commons.email,
    name: commons.username,
    message: z
      .string()
      .min(3, { message: 'Message must be at least 3 characters long.' })
      .max(2000, { message: "Message can't be longer than 2,000 characters." }),
  });

  type ContactUs = z.infer<typeof contactUsSchema>;

  const form = useForm({
    validate: zodResolver(contactUsSchema),
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  const handleSubmit = async ({ email, message, name }: ContactUs) => {
    try {
      const { isValid } = await validate();

      if (!isValid) {
        return null;
      }

      setIsDisabled(true);

      await axios.post('/api/email/contactUs', {
        email,
        message,
        name,
      });

      toast.success('Thank you for contacting us. We will get back to you within 24 hours.');
    } catch (error) {
      setIsDisabled(false);
      console.log(error);
    }
  };

  return (
    <>
      <Meta
        title="Contact Us | Coin Logic"
        description="Do you have a question or have a proposal? Let's get in touch!"
      />
      <SmallBackgroundWrapper>
        <GradientTitle align="center">Contact us!</GradientTitle>
        <Text size="sm" align="center" color="dimmed">
          Do you have a question or have a proposal? Let's get in touch!
        </Text>
      </SmallBackgroundWrapper>
      <BackgroundWrapper className="py-24 flex flex-col items-center justify-center">
        <div className="p-5 rounded-md shadow-md bg-white w-full md:max-w-[600px] md:min-w-[400px] mb-16">
          <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <Stack spacing="md">
              <ErrorMessage message={errorMessage} />
              <TextInput
                label="Email"
                placeholder="your@email.com"
                required
                size="md"
                {...form.getInputProps('email')}
              />
              <TextInput label="Name" placeholder="John Doe" required size="md" {...form.getInputProps('name')} />
              <Textarea
                placeholder="Your message"
                description="2,000 characters long"
                label="Your message"
                required
                minRows={6}
                {...form.getInputProps('message')}
              />
              <div className="flex w-full justify-end">
                <GradientButton type="submit" disabled={isDisabled}>
                  Send a message
                </GradientButton>
              </div>
            </Stack>
          </form>
        </div>
        <div>
          <Title order={2} color="white" className="mb-4">
            Find us on social media!
          </Title>
          <div className="text-white flex items-center gap-8">
            <Discord size={35} />
            <Twitter size={35} />
          </div>
        </div>
      </BackgroundWrapper>
      <TrackVitalsDisclaimer />
    </>
  );
};

export default index;
