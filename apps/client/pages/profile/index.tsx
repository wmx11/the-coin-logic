import ProfileData from 'components/pages/profile/ProfileData';
import UserLayout from 'components/pages/profile/ProfileLayout';
import { ReactElement } from 'react';

function ProfilePage<NextPageWithLayout>() {
  return <ProfileData className="w-full md:max-w-[550px]" />;
}

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
