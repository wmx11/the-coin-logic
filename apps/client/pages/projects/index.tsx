import { Container } from '@mantine/core';
import { TableNode } from '@table-library/react-table-library/types/table';
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
    <Container className="py-10">
      <ProjectsTable data={projects} projectsCount={projectsCount} />
    </Container>
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
