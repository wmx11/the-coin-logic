import { Container } from '@mantine/core';
import { TableNode } from '@table-library/react-table-library/types/table';
import Meta from 'components/Meta';
import { ProjectsTable, TableData } from 'components/ProjectsTable';
import { getProjectsCount, getProjectsForTable } from 'data/getters';
import withRedisCache from 'data/redis';
import { FC } from 'react';

type ProjectsPageProps = {
  projects: TableNode[] & TableData[];
  projectsCount: number;
};

const ProjectsPage: FC<ProjectsPageProps> = ({ projects, projectsCount }) => {
  return (
    <>
      <Meta
        title="All Cryptocurrency & DeFi Projects | Coin Logic"
        description="Explore all cryptocurrency & DeFi projects listed on TheCoinLogic. Sort by price, market cap, holders. See transparency scores, audits, KYC, and more."
      />
      <ProjectsTable data={projects} projectsCount={projectsCount} />
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
