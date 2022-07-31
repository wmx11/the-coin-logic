import { Badge, Button, Center, Container, Paper, Space, Text, Title } from '@mantine/core';
import React from 'react';
import Badges from '../Badges';
import ProjectTitle from '../ProjectTitle';

function ProjectsTable({ data }) {
  return (
    <div className="my-10">
      <Container>
        <Title order={2} className="mb-4 text-lightBlue">
          Leaderboard
        </Title>
        <Paper p="md" shadow="sm">
          <div className="flex mb-4 p-5 bg-gradient-to-r from-lightBlue to-darkBlue text-white rounded-md sticky top-0 z-10 shadow-xl">
            <div className="font-bold mr-2 min-w-[40px]">#</div>
            <div className="font-bold mr-2 min-w-[150px]">Name</div>
            <div className="font-bold mr-2 min-w-[150px]">Price / 24%</div>
            <div className="font-bold mr-2 min-w-[100px]">Holders</div>
            <div className="font-bold mr-2 min-w-[150px]">Avg. Holdings</div>
            <div className="font-bold mr-2 min-w-[150px]">Market Cap</div>
            <div className="font-bold mr-2 min-w-[150px]">Tags</div>
          </div>
          {data && data.length ? (
            data.map(({ name, slug, tags, logo }, index: number) => {
              return (
                <div key={`${name}_${index}`} className="flex p-5 items-center border-2 mb-2 rounded-md">
                  <div className="mr-2 w-[40px]">{index + 1}</div>
                  <div className="mr-2 w-[150px]">
                    <ProjectTitle
                      title={name}
                      size="sm"
                      avatar={logo ? logo.url : ''}
                      component="a"
                      href={`/project/${slug}`}
                    />
                  </div>
                  <div className="mr-2 w-[150px]">$0.0034 10%</div>
                  <div className="mr-2 w-[100px]">79,800</div>
                  <div className="mr-2 w-[150px]">99,800</div>
                  <div className="mr-2 w-[150px]">$25,800,100</div>
                  <div className="mr-2 w-[150px]">
                    <Badges badges={tags} />
                  </div>
                </div>
              );
            })
          ) : (
            <Center>
              <div className="text-center">
                <Text weight={700}>Oops!</Text>
                <Space />
                <Text>Looks like there are no projects currently listed on The Coin Logic!</Text>
              </div>
            </Center>
          )}

          {/* <div className="my-8 flex justify-between items-center">
            <Text>Showing 30 out of 300</Text>
            <Pagination color="violet" total={300} />
            <NativeSelect data={['10', '20', '30', '50']} placeholder="Pick one" />
          </div> */}

          <div className="my-8 text-center">
            <Text weight={700} className="mb-4">
              Can't find your favorite project?
            </Text>
            <Button color="violet">Refer a project</Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default ProjectsTable;
