import { Card, Container, Group, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

function BlogPosts() {
  return (
    <div className="my-20">
      <Container>
        <div className="flex flex-wrap justify-center md:justify-start gap-8">
          {Array(6)
            .fill(1)
            .map((x, i) => {
              return (
                <div className="md:w-[253px]">
                  <div className="w-full max-w-[200px]">
                    <Card shadow="sm" p="lg">
                      <Card.Section>
                        <Image src="/images/trendtitano.webp" width={200} height="100%" alt="Norway" />
                      </Card.Section>
                      <Group position="apart" className="mb-2">
                        <Text size="xs">Post</Text>
                        <Text size="xs">2022-07-21 7:21 PM</Text>
                      </Group>
                      <Text size="sm">Lorem ipsum dolore. Some text goes here. It's a summary.</Text>
                    </Card>
                  </div>
                </div>
              );
            })}
        </div>
      </Container>
    </div>
  );
}

export default BlogPosts;
