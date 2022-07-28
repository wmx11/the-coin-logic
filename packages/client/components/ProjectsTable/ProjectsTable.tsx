import { Avatar, Badge, Button, Container, NativeSelect, Pagination, Paper, Text, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';

function ProjectsTable({ data }) {
  return (
    <div className="my-10">
      <Container>
        <Title order={2} className="mb-4 text-lightBlue">
          Monitored projects
        </Title>
        <Paper p="md" shadow="sm">
          <div className="flex mb-4 p-5 bg-gradient-to-r from-lightBlue to-darkBlue text-white rounded-md sticky top-0 z-10 shadow-xl">
            <div className="font-bold min-w-[40px]"></div>
            <div className="font-bold min-w-[40px]">#</div>
            <div className="font-bold min-w-[120px]">Name</div>
            <div className="font-bold min-w-[150px]">Price / 24%</div>
            <div className="font-bold min-w-[100px]">Holders</div>
            <div className="font-bold min-w-[150px]">Avg. Holdings</div>
            <div className="font-bold min-w-[150px]">Market Cap</div>
            <div className="font-bold min-w-[150px]">Tags</div>
          </div>
          {data &&
            data.map(({ name, slug, tags }, index) => {
              return (
                <div key={`${name}_${index}`} className="flex p-5 items-center border-2 mb-2 rounded-md">
                  <div className="w-[40px]">
                    <AiOutlineStar />
                  </div>
                  <div className="w-[40px]">{index + 1}</div>
                  <div className="w-[120px]">
                    <div className="flex gap-x-2 items-center">
                      <Avatar src="images/titano.png" alt="Titano" size="sm" />
                      <Link href={`/project/${slug}`}>
                        <a>{name}</a>
                      </Link>
                    </div>
                  </div>
                  <div className="w-[150px]">$0.0034 10%</div>
                  <div className="w-[100px]">79,800</div>
                  <div className="w-[150px]">99,800</div>
                  <div className="w-[150px]">$25,800,100</div>
                  <div className="w-[150px] flex gap-2">
                    {tags &&
                      tags.map((tag, index) => {
                        return (
                          <Badge key={`${tag.name}_${index}`} color="violet">
                            {tag.name}
                          </Badge>
                        );
                      })}
                  </div>
                </div>
              );
            })}

          <div className="my-8 flex justify-between items-center">
            <Text>Showing 30 out of 300</Text>
            <Pagination color="violet" total={300} />
            <NativeSelect data={['10', '20', '30', '50']} placeholder="Pick one" />
          </div>

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
