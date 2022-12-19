import EditProfileData from 'views/profile/EditProfileData';
import UserLayout from 'views/profile/ProfileLayout';

import { ReactElement } from 'react';

function EditProfileDataPage() {
  return <EditProfileData />;
}

export default EditProfileDataPage;

EditProfileDataPage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
