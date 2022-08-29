import React, { FC } from 'react';
import { Button, Container, Paper, Space, Text, Title } from '@mantine/core';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { TableData } from './types';
import Link from 'next/link';

type ProjectsTableProps = {
  data: TableData[];
  projectsCount: number;
};

const ProjectsTable: FC<ProjectsTableProps> = ({ data, projectsCount }) => {
  return (
    <div className="my-10">
      <Container>
        <Title order={2} className="mb-4">
          Leaderboard
        </Title>
        <Paper p="md" shadow="sm">
          <div>
            <TableHead />
            <TableBody data={data} />
          </div>

          {projectsCount > 0 && (
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
            <Link href="/referrals" passHref>
              <Button color="violet" component="a">
                Refer a project and earn rewards!
              </Button>
            </Link>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default ProjectsTable;
