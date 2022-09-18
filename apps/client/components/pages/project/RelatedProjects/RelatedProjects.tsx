import { Paper, Title } from '@mantine/core';
import { ProjectTitle } from 'components/ProjectTitle';
import React, { FC } from 'react';
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
    <Paper p="md" shadow="sm" withBorder className="mb-4">
      <Title order={4} className="mb-4">
        Related Projects and Tokens
      </Title>
      <div className="w-full flex flex-wrap gap-4 items-center">
        {projects.map((item) => {
          return (
            <ProjectTitle
              size="sm"
              avatar={item?.logo?.url || ''}
              title={item.name as string}
              component="a"
              href={`/project/${item.slug}`}
            />
          );
        })}
      </div>
    </Paper>
  );
};

export default RelatedProjects;
