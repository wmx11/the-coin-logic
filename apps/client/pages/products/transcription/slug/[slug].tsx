import { Container, Text } from '@mantine/core';
import Controls from 'components/Controls/Controls';
import HighlightsCollectionForContent from 'components/HighlightCard/HighlightsCollectionForContent';
import Meta from 'components/Meta';
import { ProjectTitle } from 'components/ProjectTitle';
import SocialShare from 'components/SocialShare';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import { getTrendingProjects } from 'data/getters/server/getTrendingProjects';
import { getTranscriptionBySlug } from 'data/getters/transcriptions';
import withRedisCache from 'data/redis';
import useControls from 'hooks/useControls';
import { GetServerSideProps } from 'next';
import { FC, useEffect } from 'react';
import routes from 'routes';
import { Transcription } from 'types';
import { TrendingHighlights } from 'types/Project';
import { formatDate } from 'utils/formatters';
import { msToTime } from 'utils/utils';

type TranscriptionBySlugPageProps = {
  data: Transcription;
} & TrendingHighlights;

const TranscriptionBySlugPage: FC<TranscriptionBySlugPageProps> = ({ data, trendingHighlights }) => {
  const { id, title, slug, dateAdded, content, contentUrl, project, likesCount, views } = data;
  const { utterances, summary, generatedText, wordCount, duration } = content;
  const { handleLike, handleView, likes } = useControls({ initialLikes: likesCount as number });

  useEffect(() => {
    handleView({ transcriptionId: id });
  }, []);

  return (
    <>
      <Meta title={`${title} | Coin Logic`} description={summary} />
      <Container className="py-10">
        <section className="prose prose-md max-w-none">
          <div className="mb-8">
            <GradientTitle order={1} className="mb-2">
              {title}
            </GradientTitle>
            {project ? (
              <div className="mb-2">
                <ProjectTitle
                  title={project?.name as string}
                  size="sm"
                  component="a"
                  href={`${routes.project}/${project.slug}`}
                  avatar={project?.logo?.url || ''}
                />
              </div>
            ) : null}
            <Text size="sm" color="dimmed" className="mb-4">
              Published: {formatDate(dateAdded)}
            </Text>
            <div className="mb-4">
              <Controls
                likes={likes as number}
                views={views as number}
                likeCallback={() => handleLike({ transcriptionId: id })}
              />
            </div>
            <div className="mb-2">
              <SocialShare
                title={`${title}. Read this transcription at: `}
                url={`${routes.base}${routes.transcription.replace('${slug}', slug as string)}`}
                hashtag={project ? (project.slug as string) : 'TCL'}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16">
            <div>
              <div className="mb-4">
                <GradientTitle>Transcript</GradientTitle>
                <GradientText>Word count: {wordCount || 0}</GradientText>
                <GradientText>Duration: {msToTime(duration * 1000)}</GradientText>
                {contentUrl ? (
                  <GradientText>
                    Transcript of:{' '}
                    <a href={contentUrl} target="_blank">
                      {contentUrl}
                    </a>
                  </GradientText>
                ) : null}
              </div>
              <div className="mb-4">
                <GradientTitle order={4}>TL;DR</GradientTitle>
                <Text weight={700}>Speaker {summary}</Text>
              </div>
              {utterances
                ? utterances.map((item: { speaker: string; start: number; text: string }, index: number) => {
                    const isYoutube = contentUrl?.includes('youtu');
                    return (
                      <div className="mb-4" key={`utterance_${index}`}>
                        <div className="flex items-start gap-2">
                          <Text weight={700}>Speaker {item.speaker}</Text>
                          <Text size="xs" color="dimmed" className="mt-1">
                            {isYoutube ? (
                              <a href={`${contentUrl}&t=${Math.floor(item.start / 1000)}`} target="_blank">
                                {msToTime(item.start)}
                              </a>
                            ) : (
                              msToTime(item.start)
                            )}
                          </Text>
                        </div>
                        <Text>{item.text}</Text>
                      </div>
                    );
                  })
                : null}
            </div>
            <div>
              <GradientTitle className="mb-4">Summary</GradientTitle>
              <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: generatedText?.trim() }}></div>
              <div className="mt-4">
                <HighlightsCollectionForContent trendingHighlights={trendingHighlights} />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default TranscriptionBySlugPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await getTranscriptionBySlug(params?.slug as string);

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const trendingHighlights = await withRedisCache('trending_projects', () => getTrendingProjects(5), 10 * 60);

  return {
    props: {
      data,
      trendingHighlights,
    },
  };
};
