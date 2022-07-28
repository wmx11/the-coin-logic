import { Avatar, Container, Paper, SimpleGrid, Text, Title } from '@mantine/core';
import React from 'react';
import { AiFillClockCircle, AiFillFire, AiFillHourglass } from 'react-icons/ai';

function Highlights() {
  return (
    <div className="my-10">
      <Container>
        <Title order={2} className="mb-4 text-lightBlue">
          Highlights
        </Title>
        <SimpleGrid cols={3}>
          <Paper p="md" shadow="lg" className="bg-lightBlue text-white">
            <Text weight={700} className="mb-4 flex items-center gap-2">
              <AiFillHourglass /> Onboarding
            </Text>
            {Array(3)
              .fill(1)
              .map((x, i) => {
                return (
                  <div key={x} className="flex justify-between mb-2 pl-2 text-sm">
                    <div className="flex items-center gap-x-2 flex-1">
                      <div>{i + 1}.</div>
                      <div className="flex gap-x-2 items-center">
                        <Avatar src="images/titano.png" alt="Titano" size="sm" />
                        Titano
                      </div>
                    </div>
                    <div className="flex items-center gap-x-2 flex-1">
                      <div className="flex-1">$100</div>
                      <div className="">$35M</div>
                    </div>
                  </div>
                );
              })}
          </Paper>
          <Paper p="md" shadow="lg" className="bg-lightBlue text-white">
            <div className="flex justify-between">
              <Text weight={700} className="mb-4 flex items-center gap-2">
                <AiFillFire /> Trending
              </Text>
              <div className="text-sm">More</div>
            </div>
            {Array(3)
              .fill(1)
              .map((x, i) => {
                return (
                  <div key={x} className="flex justify-between mb-2 pl-2 text-sm">
                    <div className="flex items-center gap-x-2 flex-1">
                      <div>{i + 1}.</div>
                      <div className="flex gap-x-2 items-center">
                        <Avatar src="images/titano.png" alt="Titano" size="sm" />
                        Titano
                      </div>
                    </div>
                    <div className="flex items-center gap-x-2 flex-1">
                      <div className="flex-1">$100</div>
                      <div className="">$35M</div>
                    </div>
                  </div>
                );
              })}
          </Paper>
          <Paper p="md" shadow="lg" className="bg-lightBlue text-white">
            <div className="flex justify-between">
              <Text weight={700} className="mb-4 flex items-center gap-2">
                <AiFillClockCircle /> Recently Listed
              </Text>
              <div className="text-sm">More</div>
            </div>

            {Array(3)
              .fill(1)
              .map((x, i) => {
                return (
                  <div key={x} className="flex justify-between mb-2 pl-2 text-sm">
                    <div className="flex items-center gap-x-2 flex-1">
                      <div>{i + 1}.</div>
                      <div className="flex gap-x-2 items-center">
                        <Avatar src="images/titano.png" alt="Titano" size="sm" />
                        Titano
                      </div>
                    </div>
                    <div className="flex items-center gap-x-2 flex-1">
                      <div className="flex-1">$100</div>
                      <div className="">$35M</div>
                    </div>
                  </div>
                );
              })}
          </Paper>
        </SimpleGrid>
      </Container>
    </div>
  );
}

export default Highlights;
