import React from 'react';
import { Button, Center, Container, Text, Title } from '@mantine/core';

function JoinOurCommunity() {
  return (
    <div className="my-40">
      <Container>
        <Center>
          <div className="text-center">
            <Title order={2} className="mb-4">
              Grow together with a global community!
            </Title>
            <Text className="mb-4">
              Our community is made up of people all over the world who are excited to monitor the health of their
              favorite projects. Learn from new and veteran cryptocurrency users, provide suggestions, and find how you
              could improve your projects or obtain more knowledge!
            </Text>
            <Button
              color="violet"
              size="lg"
              variant="light"
              component="a"
              href="https://discord.gg/vwtY8XwpvZ"
              target="_blank"
            >
              Join our community
            </Button>
          </div>
        </Center>
      </Container>
    </div>
  );
}

export default JoinOurCommunity;
