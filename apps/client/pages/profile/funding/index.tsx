import UserLayout from 'views/profile/ProfileLayout';

import { ReactElement } from 'react';
import Funding from 'views/profile/Funding';

function FundingPage() {
  return <Funding />;
}

export default FundingPage;

FundingPage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
