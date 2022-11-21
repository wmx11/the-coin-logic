import { DocumentNode, useMutation } from '@apollo/client';
import { Select, Text, Textarea, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import GradientButton from 'components/Buttons/GradientButton';
import GoBack from 'components/GoBack';
import GradientTitle from 'components/Text/GradientTitle';
import { ADD_RPOJECT } from 'data/mutations/project';
import useRecaptcha from 'hooks/useRecaptcha';
import useUser from 'hooks/useUser';
import Link from 'next/link';
import { FC } from 'react';
import { toast } from 'react-toastify';
import routes from 'routes';
import { ProjectSchema, projectSchema } from 'schemas/project';
import { Network } from 'types';
import axios from 'axios';

type AddProjectProps = {
  networks: Network[];
};

const AddProject: FC<AddProjectProps> = ({ networks }) => {
  const { user } = useUser();
  const { validate } = useRecaptcha();

  const form = useForm({
    validate: zodResolver(projectSchema),
    validateInputOnBlur: true,
    initialValues: {
      name: '',
      contractAddress: '',
      network: '',
      pairAddress: '',
      description: '',
      kycLink: '',
      auditLink: '',
      website: '',
      whitepaper: '',
      twitter: '',
      telegram: '',
      discord: '',
      reddit: '',
      youtube: '',
      medium: '',
    },
  });

  const [addProject, { data, loading }] = useMutation(ADD_RPOJECT as DocumentNode);

  const handleSubmit = async (values: ProjectSchema) => {
    try {
      const { isValid } = await validate();

      if (!isValid) {
        return null;
      }

      const newProject = await addProject({
        variables: {
          ...values,
          user: user?.id || undefined,
        },
      });

      if (!newProject) {
        toast.error('There has been an issue adding your project.');
        return null;
      }

      toast.success('Your project has been submitted for a review.');

      axios.post('/api/email/sendRequestProjectListingEmail', {
        name: user?.name,
        email: user?.email,
        message: `
        <p>Hi! I want to list a project <strong>${values.name}</strong></p>
        <p><strong>Project Description:</strong> ${values.description}</p>
        `,
      });
    } catch (error) {
      toast.error('There has been an issue adding your project.');
      console.log(error);
    }
  };

  if (data) {
    return (
      <div className="w-full">
        <GoBack />
        <div className="my-4 w-full">
          <div className="flex gap-4 flex-col text-center">
            <GradientTitle order={1}>Thank you</GradientTitle>
            <Text size="md" color="dimmed">
              Thank you for submitting a project for a review. We will reach out to you within 24 hours.
            </Text>
            <Text size="md" color="dimmed">
              You can also check the state of your project on the "My projects" tab.
            </Text>

            <div>
              <Link href={routes.myProjects} passHref>
                <GradientButton component="a">View My Projects</GradientButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <GoBack />

      <div className="my-4">
        <GradientTitle order={2}>Add a Project</GradientTitle>
        <Text size="xs" color="dimmed">
          Please fill out the form below. We will review the project and get in touch with you within 24 hours.
        </Text>
      </div>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className="flex flex-col gap-4 w-full">
          <TextInput
            size="md"
            label="Project Name"
            {...form.getInputProps('name')}
            required
            description="Name of your project."
          />
          <TextInput
            size="md"
            label="Contract Address"
            {...form.getInputProps('contractAddress')}
            required
            placeholder="0x..."
            description="Contract address of your project. Leave 'TBA' if not available yet."
          />
          <TextInput
            size="md"
            label="Primary Pair Address"
            {...form.getInputProps('pairAddress')}
            required
            placeholder="0x..."
            description="Primary (the main) trading pair address of your project. Leave 'TBA' if not available yet."
          />
          {networks ? (
            <Select
              size="md"
              label="Blockchain Network"
              {...form.getInputProps('network')}
              required
              data={networks.map((item) => {
                return { label: item.name as string, value: item.id };
              })}
              placeholder="Binance Smart Chain / Polygon / Avalanche / Fantom"
              description="The network/chain your project is operating on. If you can't find your blockchain, select any and leave the information in the description box."
            />
          ) : null}

          <Textarea
            size="md"
            label="Description"
            {...form.getInputProps('description')}
            required
            minRows={6}
            placeholder="Provide a small description. Leave any necessary information here (Taxes, APY, etc.)"
            description="A short description about your project. You can include any additional information like taxes, apy, etc."
          />
          <TextInput
            size="md"
            label="Link to KYC"
            {...form.getInputProps('kycLink')}
            placeholder="https://..."
            required
            description="Link to your KYC provider"
          />
          <TextInput
            size="md"
            label="Link to Audit"
            {...form.getInputProps('auditLink')}
            placeholder="https://..."
            required
            description="Link to your Audit and Audit provider"
          />
          <TextInput
            size="md"
            label="Website"
            {...form.getInputProps('website')}
            placeholder="https://..."
            required
            description="Link to your project's website"
          />
          <TextInput
            size="md"
            label="Whitepaper"
            {...form.getInputProps('whitepaper')}
            placeholder="https://..."
            required
            description="Link to your project's whitepaper"
          />

          <TextInput size="md" label="Twitter" {...form.getInputProps('twitter')} placeholder="https://..." />
          <TextInput size="md" label="Telegram" {...form.getInputProps('telegram')} placeholder="https://..." />
          <TextInput size="md" label="Discord" {...form.getInputProps('discord')} placeholder="https://..." />
          <TextInput size="md" label="Reddit" {...form.getInputProps('reddit')} placeholder="https://..." />
          <TextInput size="md" label="Youtube Channel" {...form.getInputProps('youtube')} placeholder="https://..." />
          <TextInput size="md" label="Medium" {...form.getInputProps('medium')} placeholder="https://..." />

          <GradientButton size="md" type="submit" loading={loading}>
            Submit for review
          </GradientButton>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
