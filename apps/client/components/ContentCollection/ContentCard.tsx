import { Card, Text } from '@mantine/core';
import { ImageWithPlaceholder } from 'components/Images/Images';
import Link from 'next/link';
import { FC } from 'react';
import routes from 'routes';
import { Content } from 'types';
import { formatDate } from 'utils/formatters';
import Controls from '../Controls/Controls';

type ContentCardProps = {
  data: Content;
  showImage?: boolean;
  showControls?: boolean;
  showAuthor?: boolean;
  showType?: boolean;
  baseRoute?: string;
  fallbackRoute?: string;
};

const ContentCard: FC<ContentCardProps> = ({
  data,
  showImage = true,
  showControls = true,
  showAuthor = true,
  showType = true,
  baseRoute = routes.blogPost,
  fallbackRoute = routes.blogPost,
}) => {
  const { id, slug, title, image, contentType, summary, user, dateAdded, views, likesCount } = data;

  return (
    <Link href={(slug ? baseRoute : fallbackRoute).replace('${slug}', slug ? slug : id)} key={slug}>
      <a>
        <div className="md:max-w-[318px] w-full hover:shadow-md transition-shadow border rounded-md">
          <Card shadow="sm" p="lg">
            {showImage ? (
              <Card.Section>
                <ImageWithPlaceholder image={image ? image.url : ''} width={318} height={180} alt={title as string} />
              </Card.Section>
            ) : null}

            <Text size="md" weight={600} lineClamp={3} className="my-2">
              {title ? title : id}
            </Text>

            <div className="flex flex-wrap justify-between my-2 gap-2">
              <div>
                {showType ? (
                  <Text size="xs" color="dimmed">
                    {contentType?.title || ''}
                  </Text>
                ) : null}

                {showAuthor ? (
                  <Text size="xs" color="dimmed">
                    Author: {user?.name || '...'}
                  </Text>
                ) : null}
              </div>
              <Text size="xs" color="dimmed">
                {formatDate(dateAdded)}
              </Text>
            </div>

            <Text size="sm" color="dimmed" lineClamp={3}>
              {summary}
            </Text>

            {showControls ? (
              <div className="mt-4">
                <Controls views={views as number} likes={likesCount as number} size="xs" />
              </div>
            ) : null}
          </Card>
        </div>
      </a>
    </Link>
  );
};

export default ContentCard;
