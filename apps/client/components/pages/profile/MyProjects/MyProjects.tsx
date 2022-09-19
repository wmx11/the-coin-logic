import { Text } from '@mantine/core';
import GoBack from 'components/GoBack';
import { ProjectTitle } from 'components/ProjectTitle';
import { Column } from '@table-library/react-table-library/types/compact';
import Table from 'components/Table';
import { responsiveStylesForLayoutWithSideMenu } from 'components/Table/mainTheme';
import { Project } from 'types';
import { formatDate } from 'utils/formatters';

type MyProjectsProps = {
  projects: Project[];
};

const MyProjects = ({ projects }: MyProjectsProps) => {
  if (!projects || !projects.length) {
    return (
      <div>
        <GoBack />
        <Text className="my-4">You have no listed projects</Text>
      </div>
    );
  }

  const columns: Column[] = [
    {
      label: 'Project',
      pinLeft: true,
      renderCell: (project) => (
        <ProjectTitle
          size="sm"
          avatar={project?.logo?.url || ''}
          title={project.name as string}
          component="a"
          href={`/project/${project.slug}`}
          notifications={project.notifications}
        />
      ),
    },
    { label: 'Added', renderCell: (project) => formatDate(new Date(project.dateAdded)) },
    { label: 'Enabled', renderCell: (project) => project.enabled?.toString() },
    { label: 'Listed', renderCell: (project) => project.isListed?.toString() },
    { label: 'Track Holders', renderCell: (project) => project.trackHolders?.toString() },
    { label: 'Initialized', renderCell: (project) => project.initialized?.toString() },
    { label: 'Rebasing', renderCell: (project) => project.isRebasing?.toString() },
  ];

  return (
    <div>
      <div>
        <GoBack />
        <Text className="my-4">
          You have {projects.length} {projects.length > 1 ? 'projects' : 'project'} listed.
        </Text>
        <Text className="mb-4" size="sm" color="dimmed">
          If you have questions or some of the information about the projects is incorrect, please contact us via email
          or Discord.
        </Text>
      </div>
      <Table
        data={projects}
        columns={columns}
        customTheme={{
          Table: `--data-table-library_grid-template-columns: 140px repeat(6, 1fr);
          ${responsiveStylesForLayoutWithSideMenu}
          `,
        }}
      />
    </div>
  );
};

export default MyProjects;
