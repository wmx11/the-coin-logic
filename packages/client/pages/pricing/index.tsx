import { Button, Card, Container, Text, Title } from '@mantine/core';
import React from 'react';

function index() {
  return (
    <Container className="py-10">
      <div className="flex justify-center items-center flex-wrap gap-8 mb-8">
        <div className="text-center">
          <Title order={1} className="mb-4">
            Track your project vitals with LOG-X
          </Title>
          <Button color="violet">LOG-X Pricing Plans</Button>
        </div>
      </div>

      <div>
        <div>Choose a plan that's right for you</div>

        <div className='flex gap-4'>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section className='text-center border-b'>
              <Text>Free Trial</Text>
              <Text>$0*</Text>
            </Card.Section>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and
              around the fjords of Norway
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>


          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>Something something</Card.Section>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and
              around the fjords of Norway
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>


          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>Something something</Card.Section>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and
              around the fjords of Norway
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default index;
