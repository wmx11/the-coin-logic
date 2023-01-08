import { Text } from '@mantine/core';
import GoBack from 'components/GoBack';
import GradientTitle from 'components/Text/GradientTitle';
import { ReactElement } from 'react';
import CreateOrUpdateNexusProfile from 'views/profile/Nexus/CreateOrUpdateNexusProfile';
import UserLayout from 'views/profile/ProfileLayout';

const ApplyForNexusPage = () => {
  return (
    <div className="w-full">
      <GoBack />
      <div className="my-4">
        <GradientTitle order={2}>Apply for NEXUS profile</GradientTitle>
        <Text size="xs" color="dimmed">
          Looking to apply for your NEXUS profile? Fill out the form below and we will get back to you in 24 hours! You
          can update your information after you create the profile.
        </Text>
      </div>
      <CreateOrUpdateNexusProfile />
    </div>
  );
};

export default ApplyForNexusPage;

ApplyForNexusPage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
