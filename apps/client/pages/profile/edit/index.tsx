import EditProfileData from 'components/pages/profile/EditProfileData';
import UserLayout from 'components/pages/profile/ProfileLayout';

import { ReactElement } from 'react';

function EditProfileDataPage() {
  return <EditProfileData />;
}

export default EditProfileDataPage;

EditProfileDataPage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
