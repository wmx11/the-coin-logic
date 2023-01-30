import { Checkbox, Divider, Text, Textarea } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import GradientButton from 'components/Buttons/GradientButton';
import GoBack from 'components/GoBack';
import PaymentPlansSelect from 'components/PaymentPlans/PaymentPlansSelect';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import { QUERY_PAYMENT_PLAN_ID } from 'constants/general';
import useRecaptcha from 'hooks/useRecaptcha';
import useUser from 'hooks/useUser';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import routes from 'routes';
import { projectSchema } from 'schemas/project';
import { Network, Project } from 'types';
import { signedRequest } from 'utils/signedRequest';
import PrimaryInformation from './PrimaryInformation';
import ProjectLinks from './ProjectLinks';
import SocialMedia from './SocialMedia';
import { Discord } from 'components/Socials/Socials';
import { DatePicker } from '@mantine/dates';
import { Icons } from 'utils/icons';
import { formatISO } from 'date-fns';

type CreateOrUpdateProjectProps = {
  networks: Network[];
  project?: Project;
  isUpdate?: boolean;
};

const CreateOrUpdateProject: FC<CreateOrUpdateProjectProps> = ({ networks, project, isUpdate = false }) => {
  const [isPaymentPlanSelected, setIsPaymentPlanSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [logoData, setLogoData] = useState<Blob | null>();
  const [backgroundImageData, setBackgroundImageData] = useState<Blob | null>();
  const { user } = useUser();
  const { validate } = useRecaptcha();
  const router = useRouter();

  useEffect(() => {
    if (router.query[QUERY_PAYMENT_PLAN_ID]) {
      setIsPaymentPlanSelected(true);
    }
  }, []);

  const form = useForm({
    validate: zodResolver(projectSchema),
    validateInputOnBlur: true,
    initialValues: {
      name: project?.name || '',
      contractAddress: project?.contractAddress || '',
      networkId: project?.network?.id || '',
      maxSupply: project?.maxSupply || 0,
      paymentPlanId: project?.paymentPlan?.id || '',
      isNft: project?.isNft ? project?.isNft : false,
      isPreLaunch: project?.isPreLaunch ? project?.isPreLaunch : false,
      launchDate: project?.launchDate ? new Date(project?.launchDate) : new Date(),
      pairAddress: project?.pairAddress || '',
      description: project?.description || '',
      preLaunchInformation: project?.preLaunchInformation || '',
      kycLink: '',
      auditLink: '',
      website: project?.website || '',
      whitepaper: project?.whitepaper || '',
      twitter: project?.twitter || '',
      telegram: project?.telegram || '',
      discord: project?.discord || '',
      reddit: project?.reddit || '',
      youtube: project?.youtube || '',
      medium: project?.medium || '',
      tags: [],
    },
  });

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const { isValid } = await validate();

      if (!isValid) {
        return null;
      }

      const fd = new FormData();
      fd.append('user', user?.id as string);
      fd.append('image', logoData as Blob);
      fd.append('backgroundImage', backgroundImageData as Blob);

      if (isUpdate) {
        fd.append('projectId', (project?.id as string) || '');
        fd.append('isUpdate', isUpdate.toString());
      }

      Object.keys(form.values).forEach((key) =>
        fd.append(key, form.values[key as keyof typeof form.values].toString()),
      );

      fd.set('launchDate', formatISO(new Date(form?.values?.launchDate)));

      const { data } = await signedRequest(
        { type: 'post', url: routes.api.project.createUpdate, data: fd, isFormData: true },
        user?.id as string,
      );

      if (!data?.data) {
        toast.error(
          isUpdate ? 'There has been an issue updating your project.' : 'There has been an issue adding your project.',
        );
        setLoading(false);
        return null;
      }

      setData(data?.data);

      toast.success(isUpdate ? 'Your project has been updated!' : 'Your project has been submitted for a review.');

      if (isUpdate) {
        router.reload();
      }

      setLoading(false);
    } catch (error) {
      toast.error(
        isUpdate ? 'There has been an issue updating your project.' : 'There has been an issue adding your project.',
      );
      console.log(error);
      setLoading(false);
    }
  };

  if (data && !isUpdate) {
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
      {!isUpdate ? (
        <>
          <GoBack />
          <div className="my-4">
            <GradientTitle order={2}>Add a Project</GradientTitle>
            <Text size="xs" color="dimmed">
              Please fill out the form below. We will review the project and get in touch with you within 24 hours.
            </Text>
          </div>

          <div className="mb-4">
            <Checkbox
              {...form.getInputProps('isNft', { type: 'checkbox' })}
              label="My project is an NFT"
              description="Please check this box if your project is an NFT."
              color="violet"
            />
          </div>
          <div className="mb-4">
            <Checkbox
              {...form.getInputProps('isPreLaunch', { type: 'checkbox' })}
              label="My project is not launched yet"
              description="Please check htis box if your project has not launched yet."
              color="violet"
            />
          </div>

          <div className="mb-4">
            <PaymentPlansSelect
              label="Select a payment plan"
              description="Select your preferred payment plan for your project. You can upgrade your plan in the future by logging in to your account and visiting the project page."
              onChange={(value) => {
                form.setFieldValue('paymentPlanId', value);
                setIsPaymentPlanSelected((value) => true);
              }}
            />
          </div>

          {form.values.isPreLaunch ? (
            <div className="mb-4">
              <DatePicker
                {...form.getInputProps('launchDate')}
                label="Launch date"
                description="Please select the launch date of your project"
                color="violet"
                icon={<Icons.Calendar />}
              />
            </div>
          ) : null}
        </>
      ) : null}

      {isPaymentPlanSelected || isUpdate || form.values.isPreLaunch ? (
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-4">
              <GradientText weight={600} size="lg">
                Primary Information
              </GradientText>
              <PrimaryInformation
                form={form}
                networks={networks}
                setImageBlob={setLogoData}
                setBackgroundImageBlob={setBackgroundImageData}
                logoUrl={project?.logo?.url || ''}
                backgroundUrl={project?.backgroundImage?.url || ''}
                isUpdate={isUpdate}
                isNft={form.values.isNft}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 mb-4">
                <GradientText weight={600} size="lg">
                  Essential Links
                </GradientText>
                <ProjectLinks form={form} isUpdate={isUpdate} />
              </div>
              <GradientText weight={600} size="lg">
                Social Media Links
              </GradientText>
              <SocialMedia form={form} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="mb-4">
              <Textarea
                size="md"
                label="Description"
                {...form.getInputProps('description')}
                required
                minRows={6}
                placeholder="Provide a small description. Leave any necessary information here (Taxes, APY, etc.)"
                description="A short description about your project. You can include any additional information like taxes, apy, etc."
              />
            </div>
            {form.values.isPreLaunch ? (
              <div className="mb-4">
                <Textarea
                  size="md"
                  label="Pre-launch information"
                  {...form.getInputProps('preLaunchInformation')}
                  minRows={6}
                  placeholder="Provide some information on pre-launch. E.g. token price 0.05 ETH, hardcap 100 ETH."
                  description="Short information about the pre-launch. Price, max caps, etc."
                />
              </div>
            ) : null}

            <GradientButton size="md" type="submit" loading={loading}>
              {isUpdate ? 'Update' : 'Submit for review'}
            </GradientButton>

            <Divider label="And" labelPosition="center" />

            <Discord type="button" label="Join us on Discord & Leave Feedback!" />
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default CreateOrUpdateProject;
