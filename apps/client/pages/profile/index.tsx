import ProfileData from 'views/profile/ProfileData';
import UserLayout from 'views/profile/ProfileLayout';
import { ReactElement } from 'react';

function ProfilePage<NextPageWithLayout>() {
  return <ProfileData className="w-full" />;
}

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
