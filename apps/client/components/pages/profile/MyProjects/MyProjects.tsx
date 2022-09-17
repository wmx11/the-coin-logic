import { Text } from '@mantine/core';
import GoBack from 'components/GoBack';
import { ProjectTitle } from 'components/ProjectTitle';
import ResponsiveTable from 'components/ResponsiveTable';

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
      <ResponsiveTable
        data={{
          head: [
            { name: 'Project', width: 120 },
            { name: 'Added', width: 80 },
            { name: 'Enabled', width: 50 },
            { name: 'Listed', width: 50 },
            { name: 'Track Holders', width: 80 },
            { name: 'Initialized', width: 80 },
            { name: 'Rebasing', width: 80 },
          ],
          rows: projects.map((project) => ({
            row: [
              {
                value: (
                  <ProjectTitle
                    size="sm"
                    avatar={project?.logo?.url || ''}
                    title={project.name as string}
                    component="a"
                    href={`/project/${project.slug}`}
                  />
                ),
              },
              {
                value: formatDate(new Date(project.dateAdded)),
              },
              { value: project.enabled?.toString() },
              { value: project.isListed?.toString() },
              { value: project.trackHolders?.toString() },
              { value: project.initialized?.toString() },
              { value: project.isRebasing?.toString() },
            ],
          })),
        }}
      />
    </div>
  );
};

export default MyProjects;
