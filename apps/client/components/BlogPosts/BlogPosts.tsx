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
        <div className="flex justify-center md:justify-between flex-wrap gap-8">
          {data &&
            data.map(({ slug, title, summary, image, contentType, dateAdded }, index) => {
              return (
                <Link href={`/blog-post/${slug}`} key={`${slug}_${index}`}>
                  <a>
                    <div className="">
                      <div className="w-full max-w-[318px] hover:shadow-md transition-shadow">
                        <Card shadow="sm" p="lg">
                          <Card.Section>
                            <Image src={image ? image.url : ''} width={318} height={180} alt={title as string} />
                          </Card.Section>

                          <Text size="md" weight={600} lineClamp={3} className="my-2">
                            {title}
                          </Text>

                          <div className="flex flex-wrap justify-between my-2 gap-2">
                            <Text size="xs" color="dimmed">
                              {contentType?.title || ''}
                            </Text>
                            <Text size="xs" color="dimmed">
                              {formatDate(dateAdded)}
                            </Text>
                          </div>

                          <Text size="sm" color="dimmed" lineClamp={3}>
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
