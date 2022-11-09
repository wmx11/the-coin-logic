import { Container } from '@mantine/core';
import { TableNode } from '@table-library/react-table-library/types/table';
import Meta from 'components/Meta';
import { ProjectsTable, TableData } from 'components/ProjectsTable';
import { getProjectsCount, getProjectsForTable } from 'data/getters';
import withRedisCache from 'data/withRedisCache';
import { FC } from 'react';

type ProjectsPageProps = {
  projects: TableNode[] & TableData[];
  projectsCount: number;
};

const ProjectsPage: FC<ProjectsPageProps> = ({ projects, projectsCount }) => {
  return (
    <>
      <Meta
        title="Audited and KYC'd Cryptocurrency, and DeFi Projects | Coin Logic"
        description="Explore our list of audited and KYC'd cryptocurrency and DeFi projects. Real, transparent, and in-depth data on The Coin Logic."
      />
      <Container className="py-10">
        <ProjectsTable data={projects} projectsCount={projectsCount} />
      </Container>
    </>
  );
};

export default ProjectsPage;

export const getServerSideProps = async () => {
  const projects = await withRedisCache('projects', getProjectsForTable);
  const projectsCount = await withRedisCache('projectsCount', getProjectsCount);

  return {
    props: {
      projects,
      projectsCount,
    },
  };
};
