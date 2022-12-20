import { Checkbox, Text, Textarea } from '@mantine/core';
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
import { Network } from 'types';
import { signedRequest } from 'utils/signedRequest';
import PrimaryInformation from './PrimaryInformation';
import ProjectLinks from './ProjectLinks';
import SocialMedia from './SocialMedia';

type AddProjectProps = {
  networks: Network[];
};

const AddProject: FC<AddProjectProps> = ({ networks }) => {
  const [isPaymentPlanSelected, setIsPaymentPlanSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [logoData, setLogoData] = useState<Blob>();
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
      name: '',
      contractAddress: '',
      networkId: '',
      paymentPlanId: '',
      isNft: '',
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
      Object.keys(form.values).forEach((key) => fd.append(key, form.values[key as keyof typeof form.values]));

      const { data } = await signedRequest(
        { type: 'post', url: routes.api.project.create, data: fd, headers: { 'Content-Type': 'multipart/form-data' } },
        user?.id as string,
      );

      if (!data?.data) {
        toast.error('There has been an issue adding your project.');
        setLoading(false);
        return null;
      }
      setData(data?.data);
      toast.success('Your project has been submitted for a review.');
      setLoading(false);
    } catch (error) {
      toast.error('There has been an issue adding your project.');
      console.log(error);
      setLoading(false);
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

      <div className="mb-4">
        <Checkbox
          label="Is your project an NFT?"
          description="Please check this box if your project is an NFT."
          checked={form.values.isNft === 'true' ? true : false}
          onChange={(event) => {
            form.setFieldValue('isNft', event.currentTarget.checked.toString());
            setIsPaymentPlanSelected(false);
          }}
        />
      </div>

      <div className="mb-4">
        <PaymentPlansSelect
          label="Select a payment plan"
          description="Select your preferred payment plan for your project. You can upgrade your plan in the future by logging in to your account and visiting the project page."
          onChange={(value) => {
            form.setFieldValue('paymentPlanId', value);
            setIsPaymentPlanSelected(value !== null ? true : false);
          }}
          isNft={form.values.isNft === 'true' ? true : false}
        />
      </div>
      {isPaymentPlanSelected ? (
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-4">
              <GradientText weight={600} size="lg">
                Primary Information
              </GradientText>
              <PrimaryInformation form={form} networks={networks} setImageBlob={(image: Blob) => setLogoData(image)} />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 mb-4">
                <GradientText weight={600} size="lg">
                  Essential Links
                </GradientText>
                <ProjectLinks form={form} />
              </div>
              <GradientText weight={600} size="lg">
                Social Media Links
              </GradientText>
              <SocialMedia form={form} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Textarea
              size="md"
              label="Description"
              {...form.getInputProps('description')}
              required
              minRows={6}
              placeholder="Provide a small description. Leave any necessary information here (Taxes, APY, etc.)"
              description="A short description about your project. You can include any additional information like taxes, apy, etc."
            />
            <GradientButton size="md" type="submit" loading={loading}>
              Submit for review
            </GradientButton>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default AddProject;
