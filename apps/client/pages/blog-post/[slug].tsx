import { DocumentRendererProps } from '@keystone-6/document-renderer';
import { Center, Container, Text } from '@mantine/core';
import Controls from 'components/Controls/Controls';
import Meta from 'components/Meta';
import { NotFound } from 'components/NotFound';
import { ProjectTitle } from 'components/ProjectTitle';
import SocialShare from 'components/SocialShare';
import GradientTitle from 'components/Text/GradientTitle';
import TextContent from 'components/TextContent';
import { QUERY_PROJECT } from 'constants/general';
import { getBlogContentBySlug } from 'data/getters';
import useControls from 'hooks/useControls';
import useUser from 'hooks/useUser';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import routes from 'routes';
import { Content } from 'types';
import { formatDate } from 'utils/formatters';

type ContentTypes = {
  content: Content & {
    content: DocumentRendererProps;
  };
};

const index: FC<ContentTypes> = ({ content }) => {
  if (!content) {
    return (
      <Container className="py-10 h-screen flex items-center justify-center">
        <Center>
          <NotFound />
        </Center>
      </Container>
    );
  }

  const {
    title,
    image,
    summary,
    slug,
    richContent,
    dateAdded,
    user: author,
    project,
    contentType,
    views,
    likesCount,
  } = content;

  const { likes, handleLike, handleView } = useControls(likesCount as number);
  const { user } = useUser();

  useEffect(() => {
    handleView(content.id, routes.api.article.view);
  }, []);

  return (
    <>
      <Meta
        title={`${title} | Coin Logic`}
        description={`${summary}`}
        image={image ? image.url : ''}
        url={`${routes.base}${routes.blogPost.replace('${slug}', slug as string)}`}
      />

      <Container className="py-10">
        <section className="prose prose-md max-w-none">
          <div className="mb-2">
            <Image
              className="rounded-md"
              src={image ? image.url : ''}
              alt={title as string}
              width="800px"
              height="450px"
              layout="intrinsic"
              loading="lazy"
            />
          </div>

          <GradientTitle order={1}>{title}</GradientTitle>

          {user && (user?.id === author?.id || user?.isAdmin) ? (
            <Link
              href={`${routes.articleUpdate.replace('${slug}', slug as string)}${
                project ? `?${QUERY_PROJECT}=${project.slug}` : ''
              }`}
            >
              <a>
                <Text size="sm" color="violet" className="mb-2">
                  Edit Article
                </Text>
              </a>
            </Link>
          ) : null}

          <Text size="sm" color="dimmed" className="mb-2">
            Author: {author?.name}
          </Text>

          <Text size="sm" color="dimmed" className="mb-2">
            Published: {formatDate(dateAdded)}
          </Text>

          {project ? (
            <div className="flex gap-2 items-center mb-2">
              <Text size="sm" color="dimmed">
                Related Project:
              </Text>
              <ProjectTitle
                title={project?.name as string}
                size="sm"
                component="a"
                href={`${routes.project}/${project.slug}`}
                avatar={project?.logo?.url || ''}
              />
            </div>
          ) : null}

          <div className="mb-4">
            <Controls
              views={views as number}
              likes={likes as number}
              likeCallback={() => handleLike(content.id, routes.api.article.like)}
            />
          </div>

          <div className="mb-2">
            <SocialShare
              title={`${title as string}. Read it here:`}
              url={`${routes.base}${routes.blogPost.replace('${slug}', slug as string)}`}
              hashtag={project ? (project?.slug as string) : 'TCL'}
            />
          </div>

          <Text size="sm" color="dimmed" className="mb-2">
            {contentType?.title}
          </Text>

          <TextContent content={content} richContent={richContent} className="max-w-none" />
        </section>
      </Container>
    </>
  );
};

export default index;

type Params = {
  params: {
    slug: string;
  };
};

export const getServerSideProps = async ({ params }: Params) => {
  const slug = params.slug;
  const content = await getBlogContentBySlug(slug);

  return {
    props: {
      content,
    },
  };
};
