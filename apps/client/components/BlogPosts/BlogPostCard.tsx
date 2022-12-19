import { Card, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Content } from 'types';
import { formatDate } from 'utils/formatters';
import Controls from '../Controls/Controls';

type BlogPostCardProps = {
  data: Content;
};

const BlogPostCard: FC<BlogPostCardProps> = ({ data }) => {
  const { slug, title, image, contentType, summary, user, dateAdded, views, likesCount } = data;

  return (
    <Link href={`/blog-post/${slug}`} key={slug}>
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
                <div>
                  <Text size="xs" color="dimmed">
                    {contentType?.title || ''}
                  </Text>
                  <Text size="xs" color="dimmed">
                    Author: {user?.name || '...'}
                  </Text>
                </div>
                <Text size="xs" color="dimmed">
                  {formatDate(dateAdded)}
                </Text>
              </div>

              <Text size="sm" color="dimmed" lineClamp={3}>
                {summary}
              </Text>

              <div className="mt-4">
                <Controls views={views as number} likes={likesCount as number} size="xs" />
              </div>
            </Card>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogPostCard;
