import { Card, Container, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Content } from 'types';
import { formatDate } from 'utils/formatters';

type BlogPostsType = { 
  data: Content[];
};

const BlogPosts: FC<BlogPostsType> = ({ data }) => {
  return (
    <div className="my-52">
      <Container>
        <div className="flex justify-center flex-wrap md:justify-start gap-8">
          {data &&
            data.map(({ slug, title, summary, image, contentType, dateAdded }, index) => {
              return (
                <Link href={`/blog-post/${slug}`} key={`${slug}_${index}`}>
                  <a>
                    <div className="md:w-[253px]">
                      <div className="w-full max-w-[200px] hover:shadow-md transition-shadow">
                        <Card shadow="sm" p="lg">
                          <Card.Section>
                            <Image src={image ? image.url : ''} width={200} height="100%" alt={title as string} />
                          </Card.Section>

                          <Text size="md" weight={600} lineClamp={3}>
                            {title}
                          </Text>

                          <div className="flex flex-wrap justify-between my-2 gap-2">
                            <Text size="xs">{contentType?.title || ''}</Text>
                            <Text size="xs">{formatDate(dateAdded)}</Text>
                          </div>

                          <Text size="sm" lineClamp={3}>
                            {summary}
                          </Text>
                        </Card>
                      </div>
                    </div>
                  </a>
                </Link>
              );
            })}
        </div>
      </Container>
    </div>
  );
};

export default BlogPosts;
