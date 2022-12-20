import AddProject from 'views/profile/AddProject';
import UserLayout from 'views/profile/ProfileLayout';
import prisma from 'data/prisma';
import { ReactElement } from 'react';
import { Network } from 'types';

type AddProjectPageProps = {
  networks: Network[];
};

const AddProjectPage = ({ networks }: AddProjectPageProps) => {
  return <AddProject networks={networks} />;
};

export default AddProjectPage;

export const getServerSideProps = async () => {
  const networks = await prisma?.network.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return {
    props: {
      networks: networks,
    },
  };
};

AddProjectPage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
