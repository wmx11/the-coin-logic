import { DocumentNode, useMutation } from '@apollo/client';
import { Select, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import GradientButton from 'components/Buttons/GradientButton';
import GoBack from 'components/GoBack';
import GradientTitle from 'components/Text/GradientTitle';
import { getDiscordConfigById } from 'data/getters/discord';
import { CREATE_DISCORD_CONFIG, UPDATE_DISCORD_CONFIG } from 'data/mutations/discord';
import useDiscord from 'hooks/useDiscord';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { toast } from 'react-toastify';
import { DiscordConfig } from 'types';
import UserLayout from 'views/profile/ProfileLayout';

type DisocordConfigPageProps = {
  config: DiscordConfig;
};

const DisocordConfigPage = ({ config }: DisocordConfigPageProps) => {
  const router = useRouter();
  const { guildId, id, projectId } = router?.query;
  const { isOnline, channels, guildName, isLoading, addAllScheduledEvents, reloadConfig } = useDiscord(
    guildId as string,
  );
  const discordChannels = channels ? channels.map(({ id, name }) => ({ label: name, value: id })) : [];

  const form = useForm({
    initialValues: {
      guildName: guildName,
      guildId: guildId,
      announcementsChannelId: config?.announcementsChannelId || '',
      announcementsChannelName: config?.announcementsChannelName || '',
      generalChannelId: config?.generalChannelId || '',
      generalChannelName: config?.generalChannelName || '',
    },
  });

  const [createOrUpdateDiscordConfig, { loading }] = useMutation(
    id ? (UPDATE_DISCORD_CONFIG as DocumentNode) : (CREATE_DISCORD_CONFIG as DocumentNode),
  );

  const handleSubmit = async (values: typeof form.values) => {
    const data = await createOrUpdateDiscordConfig({
      variables: {
        ...values,
        guildName,
        announcementsChannelName: discordChannels.find((item) => item.value === form.values.announcementsChannelId)
          ?.label,
        generalChannelName: discordChannels.find((item) => item.value === form.values.generalChannelId)?.label,
        projectId,
        id,
      },
    });

    if (data) {
      return toast.success(`${guildName} Discord Config ${id ? 'Updated' : 'Created'} Successfully`);
    }

    return toast.error('There has been an issue with the config');
  };

  const handleAddScheduledEvents = async () => {
    const data = await addAllScheduledEvents();

    if (data) {
      return toast.success('Scheduled Events Added Successfully.');
    }
    return toast.error('There has been an issue adding scheduled events.');
  };

  const handleReloadDiscordConfig = async () => {
    const data = await reloadConfig();

    if (data) {
      return toast.success('Discord config reloaded successfully.');
    }
    return toast.error('There has been an issue reloading discord config.');
  };

  return (
    <div>
      <div>
        <GoBack />
        <GradientTitle order={2} className="mt-4">
          Discord Bot Config
        </GradientTitle>
        <Text className="mb-4" size="sm" color="dimmed">
          If you have questions or some of the information about the projects is incorrect, please contact us via email
          or Discord.
        </Text>
      </div>

      <div className="my-4">
        <Text>
          Discord bot is:{' '}
          {isOnline ? (
            <strong className="text-green-500">Online</strong>
          ) : (
            <strong className="text-red-500">Offline</strong>
          )}
        </Text>
      </div>

      <div className="mb-8">
        <div className="mb-2">
          <Text size="sm" weight={700}>
            Actions
          </Text>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          <GradientButton disabled={!isOnline} loading={isLoading} onClick={handleAddScheduledEvents}>
            Add Scheduled Events
          </GradientButton>
          <GradientButton disabled={!isOnline}>Add Latest Announcements</GradientButton>
          <GradientButton disabled={!isOnline} onClick={handleReloadDiscordConfig}>
            Reload Config
          </GradientButton>
        </div>
      </div>

      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <div className="mb-2">
          <Text size="sm" weight={700}>
            Channels Config
          </Text>
        </div>
        <div className="flex flex-col gap-4">
          <Select
            label="Announcements Channel"
            description="This channel will be used to track announcements"
            {...form.getInputProps('announcementsChannelId')}
            data={discordChannels}
          />
          <Select
            label="General Channel"
            description="This channel will be used to track community sentiment"
            {...form.getInputProps('generalChannelId')}
            data={discordChannels}
          />
          <GradientButton type="submit" fullWidth loading={loading} disabled={!isOnline}>
            Save Config
          </GradientButton>
        </div>
      </form>
    </div>
  );
};

export default DisocordConfigPage;

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const { id } = query;
  const session = await getSession({ req });

  if (!session || !session.isAdmin) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const config = id ? await getDiscordConfigById(id as string) : null;

  return {
    props: {
      config,
    },
  };
};

DisocordConfigPage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
