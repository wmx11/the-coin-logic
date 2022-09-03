import { Button, Container, Stack, Text, Textarea, TextInput, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import axios from 'axios';
import ErrorMessage from 'components/ErrorMessage';
import { Discord, Twitter } from 'components/Socials/Socials';
import TextContent from 'components/TextContent';
import { getContentBySlug } from 'data/getters';
import useRecaptcha from 'hooks/useRecaptcha';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import { commons } from 'schemas/user';
import { ContentProps } from 'types/TextContent';
import { z } from 'zod';

const index: FC<ContentProps> = ({ content }) => {
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
      const isValid = await validate();

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
    <Container className="py-10">
      <div className="bg-violet p-5 md:p-16 rounded-md flex flex-wrap justify-between gap-8 w-full mb-8">
        <div className="text-white flex-1">
          <Title order={1}>Contact us</Title>
          <Text size="md">Leave your email and we will get back to you within 24 hours</Text>
          <Text size="md" className="mb-8">
            You can also contact us on Discord or directly via email info@thecoinlogic.com
          </Text>
          <Text size="md" className="mb-2">
            Our socials
          </Text>
          <div className="flex gap-6 items-center">
            <Discord size={22} />
            <Twitter size={22} />
          </div>
        </div>

        <div className="p-5 rounded-md shadow-md bg-white w-full md:max-w-[400px] md:min-w-[400px]">
          <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <Stack spacing="md">
              <ErrorMessage message={errorMessage} />
              <TextInput label="Email" placeholder="your@email.com" required {...form.getInputProps('email')} />
              <TextInput label="Name" placeholder="John Doe" required {...form.getInputProps('name')} />
              <Textarea
                placeholder="Your message"
                description="2,000 characters long"
                label="Your message"
                required
                {...form.getInputProps('message')}
              />
              <div className="flex w-full justify-end">
                <Button type="submit" color="violet" disabled={isDisabled}>
                  Send a message
                </Button>
              </div>
            </Stack>
          </form>
        </div>
      </div>
      <TextContent content={content} className="m-auto max-w-none" />
    </Container>
  );
};

export default index;

export const getServerSideProps = async () => {
  const content = await getContentBySlug('contact-us');

  return {
    props: {
      content,
    },
  };
};
