import { TableNode } from '@table-library/react-table-library/types/table';
import AddYourProject from 'components/AddYourProject';
import Meta from 'components/Meta';
import { ProjectsTable, TableData } from 'components/ProjectsTable';
import { getProjectsForTable } from 'data/getters/server/projects';
import withRedisCache from 'data/redis';
import { FC } from 'react';

type ProjectsPageProps = {
  projects: TableNode[] & TableData[];
};

const ProjectsPage: FC<ProjectsPageProps> = ({ projects }) => {
  return (
    <>
      <Meta
        title="All Cryptocurrency & DeFi Projects | Coin Logic"
        description="Explore all cryptocurrency & DeFi projects listed on TheCoinLogic. Sort by price, market cap, holders. See transparency scores, audits, KYC, and more."
      />
      <ProjectsTable data={projects} />
      <AddYourProject />
    </>
  );
};

export default ProjectsPage;

export const getServerSideProps = async () => {
  const projects = await withRedisCache('projects', getProjectsForTable);

  return {
    props: {
      projects,
    },
  };
};
