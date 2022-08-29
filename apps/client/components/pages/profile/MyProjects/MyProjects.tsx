import { Card, Checkbox, Text } from '@mantine/core';
import GoBack from 'components/GoBack';
import NotificationBar from 'components/NotificationBar';
import { ProjectTitle } from 'components/ProjectTitle';
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
          You have {projects.length} {projects.length > 1 ? 'porjects' : 'project'} listed on TCL.
        </Text>
        <Text className="mb-4" size="sm" color="dimmed">
          If you have questions or some of the information about the projects is incorrect, please contact us via email
          or Discord.
        </Text>
      </div>
      <div className="flex flex-wrap gap-8">
        {projects.map((project, index) => {
          return (
            <Card shadow="sm" p="lg" radius="md" withBorder className="max-w-[320px]" key={`${project.slug}_${index}`}>
              
              {project.notifications?.map((notification, index) => (
                <NotificationBar size="xs" mb="4" notification={notification} key={`notification_${index}`} />
              ))}

              <ProjectTitle
                size="sm"
                avatar={project?.logo?.url || ''}
                title={project.name as string}
                component="a"
                href={`/project/${project.slug}`}
              />

              <div>
                <Text className="mb-2" size="sm" color="dimmed">
                  Project stats
                </Text>
                <Checkbox
                  className="mb-2"
                  size="xs"
                  label="Tracking is enabled"
                  disabled
                  checked={project.enabled as boolean}
                />
                <Checkbox
                  className="mb-2"
                  size="xs"
                  label="Project is listed"
                  disabled
                  checked={project.isListed as boolean}
                />
                <Checkbox
                  className="mb-2"
                  size="xs"
                  label="Project is tracking holders"
                  disabled
                  checked={project.trackHolders as boolean}
                />
                <Checkbox
                  className="mb-2"
                  size="xs"
                  label="Project is ready to track holders"
                  disabled
                  checked={project.initialized as boolean}
                />
                <Checkbox
                  className="mb-2"
                  size="xs"
                  label="Project is rebasing"
                  disabled
                  checked={project.isRebasing as boolean}
                />
                <Text className="" size="sm" color="dimmed">
                  Launch Date: {formatDate(new Date(project.launchDate))}
                </Text>
                <Text className="mb-2" size="sm" color="dimmed">
                  Added: {formatDate(new Date(project.dateAdded))}
                </Text>
              </div>

              <Text size="sm" color="dimmed" className="break-words mb-2">
                Contract address: {project.contractAddress}
              </Text>
              <Text size="sm" color="dimmed" className="break-words mb-2">
                Pair address: {project.pairAddress}
              </Text>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
