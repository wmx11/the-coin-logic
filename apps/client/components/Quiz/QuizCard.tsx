import { Card, Text } from '@mantine/core';
import Controls from 'components/Controls/Controls';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import routes from 'routes';
import { Quiz } from 'types';
import { formatDate } from 'utils/formatters';
import toLocaleString from 'utils/toLocaleString';

type QuizCardProps = {
  quiz: Quiz;
};

const QuizCard: FC<QuizCardProps> = ({ quiz }) => {
  const {
    slug,
    title,
    image,
    dateAdded,
    views,
    likesCount,
    hasRewards,
    totalWinners,
    rewardsAmount,
    rewardType,
    winners,
  } = quiz;
  return (
    <Link href={`${routes.quiz.replace('${slug}', slug as string)}`} key={slug}>
      <a>
        <div className="">
          <div className="w-full max-w-[318px] hover:shadow-md transition-shadow rounded-md">
            <Card shadow="sm" p="lg" withBorder>
              <Card.Section>
                <Image src={image ? image.url : ''} width={318} height={180} alt={title as string} />
              </Card.Section>

              <Text size="md" weight={600} lineClamp={3} className="my-2">
                {title}
              </Text>

              <div className="flex flex-wrap justify-between my-2 gap-2">
                <Text size="xs" color="dimmed">
                  {formatDate(dateAdded)}
                </Text>
              </div>
              {hasRewards ? (
                <div>
                  <Text size="sm" color="violet">
                    Winners:{' '}
                    <strong>
                      {winners || 0}/{totalWinners || 0}
                    </strong>
                  </Text>
                  <Text size="sm" color="violet">
                    Total Rewards:{' '}
                    <strong>
                      {toLocaleString(rewardsAmount || 0) || 0} {rewardType}
                    </strong>
                  </Text>
                </div>
              ) : null}

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

export default QuizCard;
