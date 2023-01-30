import { ProjectTitle } from 'components/ProjectTitle';
import GradientTitle from 'components/Text/GradientTitle';
import { FC } from 'react';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';

type RelatedProjectsProps = {
  data: ProjectWithMarketStatsAndChanges;
};

const RelatedProjects: FC<RelatedProjectsProps> = ({ data }) => {
  const { relatedProjects } = data;
  const { parentProject } = data.project;

  if (!relatedProjects.length && parentProject && !parentProject.length) {
    return null;
  }

  const projects = (() => {
    if (relatedProjects.length > 0) {
      return relatedProjects;
    }
    return parentProject;
  })();

  if (!projects) {
    return null;
  }

  return (
    <div>
      <GradientTitle order={4} className="mb-4">
        Related
      </GradientTitle>
      <div className="w-full flex flex-wrap gap-8 items-center">
        {projects.map((item, index) => {
          return (
            <ProjectTitle
              size="sm"
              avatar={item?.logo?.url || ''}
              title={item.name as string}
              component="a"
              href={`/project/${item.slug}`}
              key={`related_project_${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProjects;
