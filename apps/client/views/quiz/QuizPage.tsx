import { Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import Controls from 'components/Controls/Controls';
import { LargeImage } from 'components/Images/Images';
import Paper from 'components/Paper';
import { ProjectTitle } from 'components/ProjectTitle';
import GradientTitle from 'components/Text/GradientTitle';
import TextContent from 'components/TextContent';
import { QUERY_PROJECT_ID, QUIZ_TOKEN } from 'constants/general';
import { isAfter, isBefore } from 'date-fns';
import useControls from 'hooks/useControls';
import useLocalStorage from 'hooks/useLocalStorage';
import useUser from 'hooks/useUser';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import routes from 'routes';
import { Quiz } from 'types';
import { formatDate } from 'utils/formatters';
import { Icons } from 'utils/icons';
import toLocaleString from 'utils/toLocaleString';

type QuizPageProps = {
  quiz: Quiz;
  startQuiz?: () => void;
};

const QuizPage: FC<QuizPageProps> = ({ quiz, startQuiz }) => {
  const {
    id,
    slug,
    user: author,
    title,
    image,
    project,
    views,
    likesCount,
    description,
    dateAdded,
    hasRewards: isDistributingRewards,
    totalWinners,
    winners,
    rewardsAmount,
    rewardType,
    timePerQuestion,
    startDate,
    endDate,
    enabled,
  } = quiz;

  const { user } = useUser();
  const { likes, handleLike, handleView } = useControls({ initialLikes: likesCount as number });
  const [value] = useLocalStorage(`${QUIZ_TOKEN}=${id}`, { playCount: 0 });

  const hasRewards = isDistributingRewards && winners !== totalWinners;
  const isAvailable = startDate
    ? isAfter(new Date(), new Date(startDate)) && isBefore(new Date(), new Date(endDate))
    : true;

  useEffect(() => {
    handleView({ quizId: id });
  }, []);

  return (
    <section className="prose prose-md max-w-none">
      <GradientTitle className="mb-4">{title}</GradientTitle>

      <div className="mb-4">
        <LargeImage image={image?.url as string} alt={title as string} />
      </div>

      <Text size="sm" color="dimmed" className="mb-2">
        Published: {formatDate(dateAdded)}
      </Text>

      {user && (user?.id === author?.id || user?.isAdmin) ? (
        <Link
          href={`${routes.quizUpdate.replace('${slug}', slug as string)}${
            project ? `?${QUERY_PROJECT_ID}=${project?.id}` : null
          }`}
        >
          <a>
            <Text size="sm" color="violet" className="mb-2">
              Edit Quiz
            </Text>
          </a>
        </Link>
      ) : null}

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

      <div className="mb-8">
        <Controls views={views as number} likes={likes as number} likeCallback={() => handleLike({ quizId: id })} />
      </div>

      <div className="mb-8">
        <Text weight={600}>About the quiz</Text>
        <TextContent richContent={description} className="max-w-none" />
      </div>

      <Paper className="mb-4 flex flex-col items-center gap-4" withBorder>
        {hasRewards ? (
          <>
            <Text size="xl" className="flex gap-2 items-center">
              <Icons.Trophy color="orange" />
              Winners:{' '}
              <strong>
                {winners || 0} / {totalWinners || 0}
              </strong>
            </Text>
            <Text size="xl" className="flex gap-2 items-center">
              <Icons.Coins />
              Total Rewards:{' '}
              <strong>
                {toLocaleString(rewardsAmount || 0) || 0} {rewardType}
              </strong>
            </Text>
            <Text size="xl">
              Win up to{' '}
              <strong>
                {toLocaleString(Math.floor((rewardsAmount || 0) / (totalWinners || 0)) || 0)} {rewardType}!
              </strong>
            </Text>
            <Text size="sm" color="dimmed">
              Please closely follow the quiz description and other instructions to claim your rewards if you win.
            </Text>
          </>
        ) : null}

        {timePerQuestion && timePerQuestion > 0 ? (
          <div>
            <Text color="violet">
              You have <strong>{timePerQuestion || 0}</strong> seconds for each question
            </Text>
          </div>
        ) : null}

        {value && value.playCount >= 1 ? (
          <div className="text-center">
            <Text color="violet" size="xs">
              You have played <strong>{value.playCount}</strong> times
            </Text>
            {hasRewards ? (
              <Text color="violet" size="xs">
                You are eligible to win the rewards only once
              </Text>
            ) : null}
          </div>
        ) : null}

        {enabled && isAvailable ? (
          <GradientButton size="lg" leftIcon={<Icons.Game />} onClick={startQuiz}>
            Take the quiz!
          </GradientButton>
        ) : (
          <Text color="violet" size="xs">
            The quiz is currently unavailable
          </Text>
        )}
      </Paper>
    </section>
  );
};

export default QuizPage;
