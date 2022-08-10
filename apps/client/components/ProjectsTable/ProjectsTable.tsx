import React, { FC } from 'react';
import { Button, Container, Paper, Space, Text, Title } from '@mantine/core';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { TableData } from './types';

type ProjectsTableProps = {
  data: TableData[];
  projectsCount: number;
};

const ProjectsTable: FC<ProjectsTableProps> = ({ data, projectsCount }) => {
  return (
    <div className="my-10">
      <Container>
        <Title order={2} className="mb-4 text-lightBlue">
          Leaderboard
        </Title>
        <Paper p="md" shadow="sm">
          <TableHead />
          <TableBody data={data} />

          {projectsCount && (
            <div className="my-8 flex justify-between items-center">
              <Text>
                Showing {projectsCount} out of {projectsCount} projects
              </Text>
            </div>
          )}

          <div className="my-8 text-center">
            <Text weight={700} className="mb-4">
              Can't find your favorite project?
            </Text>
            <Button color="violet">Refer a project and earn rewards!</Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default ProjectsTable;
