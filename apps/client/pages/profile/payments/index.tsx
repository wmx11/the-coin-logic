import AddProject from 'components/pages/profile/AddProject';
import MyProjects from 'components/pages/profile/MyProjects';
import Payments from 'components/pages/profile/Payments';
import UserLayout from 'components/pages/profile/ProfileLayout';
import { TextContentProps } from 'components/TextContent/TextContent';
import { getContentByBlock, getProjectsByUserEmail } from 'data/getters';
import { getUserPayments } from 'data/getters/user';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { FC, ReactElement } from 'react';
import { Payment } from 'types';

type PaymentsPageProps = {
  payments: Payment[];
};

const PaymentsPage = ({ payments }: PaymentsPageProps) => {
  return <Payments payments={payments} />;
};

export default PaymentsPage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session || !session.user) {
    return { props: {} };
  }

  const email = session.user.email;

  const payments = await getUserPayments(email as string);
  return {
    props: {
      payments,
    },
  };
};

PaymentsPage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
