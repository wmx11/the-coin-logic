import { NumberInput, Switch, TextInput, Textarea } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import GradientButton from 'components/Buttons/GradientButton';
import ImageUpload from 'components/ImageUpload';
import TagSelect from 'components/TagSelect';
import useUser from 'hooks/useUser';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import routes from 'routes';
import { Provider } from 'types';
import { signedRequest } from 'utils/signedRequest';
import { nexusProfile } from '../../../schemas/nexusProfile';

type CreateOrUpdateNexusProfileProps = {
  provider?: Provider;
  isUpdate?: boolean;
};

const CreateOrUpdateNexusProfile: FC<CreateOrUpdateNexusProfileProps> = ({ provider, isUpdate }) => {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [backgroundImageData, setBackgroundImageData] = useState<Blob>();
  const [imageData, setImageData] = useState<Blob>();

  const form = useForm({
    validate: zodResolver(nexusProfile),
    initialValues: {
      name: provider?.name || '',
      contactEmail: provider?.contactEmail || '',
      nickname: provider?.nickname || '',
      summary: provider?.summary || '',
      about: provider?.about || '',
      offers: provider?.offers || '',
      website: provider?.website || '',
      twitter: provider?.twitter || '',
      telegram: provider?.telegram || '',
      discord: provider?.discord || '',
      reddit: provider?.reddit || '',
      youtube: provider?.youtube || '',
      tags: provider?.tags?.map(({ id }) => id) || [],
      priceFrom: provider?.priceFrom || 0,
      priceTo: provider?.priceTo || 0,
      displayEmail: provider?.displayEmail === true ? true : false,
      openForWork: provider?.openForWork === true ? true : false,
      displayPrices: provider?.displayPrices === true ? true : false,
      isListed: provider?.isListed === true ? true : false,
      enabled: provider?.enabled === true ? true : false,
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      const fd = new FormData();
      Object.keys(values).forEach((key) => fd.append(key, values[key as keyof typeof form.values].toString()));

      fd.append('image', imageData as Blob);
      fd.append('backgroundImage', backgroundImageData as Blob);

      if (isUpdate && provider?.id) {
        fd.append('isUpdate', isUpdate.toString());
        fd.append('providerId', provider?.id.toString());
      }

      await signedRequest(
        {
          type: 'post',
          data: fd,
          url: routes.api.nexus.createUpdate,
          headers: { 'Content-Type': 'multipart/form-data' },
        },
        user?.id as string,
      );

      if (isUpdate) {
        return router.reload();
      }

      setLoading(false);

      return router.push(routes.myNexus);
    } catch (error) {
      toast.error('There has been an issue while submitting the content.');
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={form.onSubmit(handleSubmit)} className="flex flex-col gap-4">
        {isUpdate ? (
          <div>
            <ImageUpload
              fit="cover"
              size={{ width: 928, height: 250, maxWidth: '100%', maxHeigth: '150px' }}
              label="Background image"
              description="Background image will be visible as your cover image on your profile"
              previewTetxt="Your profile cover image. 928 x 250"
              accept="image/jpg,image/jpeg,image/png,image/svg"
              initialImageUrl={provider?.backgroundImage?.url || ''}
              setImageBlob={setBackgroundImageData}
            />
          </div>
        ) : null}

        <div>
          <ImageUpload
            fit="cover"
            size={{ height: 400, width: 400, maxWidth: '100%', maxHeigth: '120px' }}
            label="Profile image"
            description="Profile image will be visible as your main image on your profile"
            previewTetxt="Your profile image. 400 x 400"
            accept="image/jpg,image/jpeg,image/png,image/svg"
            initialImageUrl={provider?.image?.url || ''}
            setImageBlob={setImageData}
          />
        </div>

        {user?.isAdmin ? (
          <div>
            <Switch
              {...form.getInputProps('enabled', { type: 'checkbox' })}
              label="Enabled"
              description="Is the account enabled and accessible to the public?"
            />
            <Switch
              {...form.getInputProps('isListed', { type: 'checkbox' })}
              label="Is Listed"
              description="Is the profile listed on the NEXUS board?"
            />
          </div>
        ) : null}

        <TextInput {...form.getInputProps('name')} label="Name" required />

        <TextInput {...form.getInputProps('nickname')} label="Nickname" required />

        <TagSelect isPerson={true} form={form} />

        <Switch
          {...form.getInputProps('displayEmail', { type: 'checkbox' })}
          label="Display my contact email"
          description="If you are open to be contacted, yo ucan choose to display your contact email."
        />
        {form.values.displayEmail ? <TextInput {...form.getInputProps('contactEmail')} label="Contact email" /> : null}

        <Textarea
          {...form.getInputProps('summary')}
          label="Short summary"
          required
          description="A short summary will be displayed on your profile card."
          maxLength={200}
          minRows={3}
        />
        <Textarea
          {...form.getInputProps('about')}
          label="About me"
          required
          description="About Me will be displayed on your Nexus profile page."
          maxLength={1000}
          minRows={5}
        />

        <Switch
          {...form.getInputProps('openForWork', { type: 'checkbox' })}
          label="I am open for offers / work"
          description="If you are open for offers or work, your profile will be included in our newsletters."
        />
        {form.values.openForWork ? (
          <Textarea
            {...form.getInputProps('offers')}
            label="Offers"
            description="What do you offer? If you are open for offers, what are you looking for?"
            maxLength={250}
            minRows={4}
          />
        ) : null}

        <Switch
          {...form.getInputProps('displayPrices', { type: 'checkbox' })}
          label="Display my prices"
          description="Do you want to display your price range? If you are offering services, you can choose to publically display your price range."
        />
        {form.values.displayPrices ? (
          <div className="flex flex-col gap-4">
            <NumberInput {...form.getInputProps('priceFrom')} label="Price from" min={0} hideControls />
            <NumberInput {...form.getInputProps('priceTo')} label="Price to" min={0} hideControls />
          </div>
        ) : null}

        <TextInput {...form.getInputProps('website')} label="Website" />
        <TextInput {...form.getInputProps('twitter')} label="Twitter" />
        <TextInput {...form.getInputProps('telegram')} label="Telegram" />
        <TextInput {...form.getInputProps('discord')} label="Discord" />
        <TextInput {...form.getInputProps('reddit')} label="Reddit" />
        <TextInput {...form.getInputProps('youtube')} label="Youtube" />

        <GradientButton type="submit" loading={loading}>
          Submit
        </GradientButton>
      </form>
    </div>
  );
};

export default CreateOrUpdateNexusProfile;
