import AddProject from 'components/pages/profile/AddProject';
import MyProjects from 'components/pages/profile/MyProjects';
import UserLayout from 'components/pages/profile/ProfileLayout';
import { TextContentProps } from 'components/TextContent/TextContent';
import { getContentByBlock, getProjectsByUserEmail } from 'data/getters';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { FC, ReactElement } from 'react';
import { Project } from 'types';

type MyProjectsPageProps = {
  projects: Project[];
};

const MyProjectsPage = ({ projects }: MyProjectsPageProps) => {
  return <MyProjects projects={projects} />;
};

export default MyProjectsPage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session || !session.user) {
    return { props: {} };
  }

  const email = session.user.email;

  const projects = await getProjectsByUserEmail(email as string);
  return {
    props: {
      projects,
    },
  };
};

MyProjectsPage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
