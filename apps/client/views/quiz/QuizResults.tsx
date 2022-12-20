import { Divider, Text } from '@mantine/core';
import Paper from 'components/Paper';
import { ProjectTitle } from 'components/ProjectTitle';
import SocialShare from 'components/SocialShare';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import TextContent from 'components/TextContent';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import QuizImage from 'public/images/quiz.svg';
import Winner from 'public/images/winner.svg';
import { FC, useEffect, useState } from 'react';
import routes from 'routes';
import { Quiz } from 'types';
import { Icons } from 'utils/icons';
import toLocaleString from 'utils/toLocaleString';
import { QuizConfig } from './CreateOrUpdateQuiz';
import { formateDateWithHours } from 'utils/formatters';
import useLocalStorage from 'hooks/useLocalStorage';
import { QUIZ_TOKEN } from 'constants/general';
import { signedRequest } from 'utils/signedRequest';
import { IsSafeAuth } from 'data/api/request';

type QuizResultsProps = {
  quiz: Quiz;
  results: QuizConfig[];
};

const QuizResults: FC<QuizResultsProps> = ({ quiz, results }) => {
  const {
    id,
    title,
    slug,
    project,
    description,
    hasRewards: isDistributingRewards,
    totalWinners,
    winners,
    rewardsAmount,
    rewardType,
    onWinDescription,
    onEndDescription,
  } = quiz;

  const [value, setValue] = useLocalStorage(`${QUIZ_TOKEN}=${id}`, { playCount: 0 });
  const [winnersAmount, setWinnersAmount] = useState<number>(winners || 0);

  const hasRewards =
    value.playCount < 2 && isDistributingRewards && ((winners as number) || 0) !== ((totalWinners as number) || 0)
      ? isDistributingRewards
      : false;

  const addWinner = async () => {
    if (value.playCount > 1) {
      return;
    }

    const { data } = await signedRequest<IsSafeAuth>(
      { type: 'post', data: { id }, url: routes.api.products.quiz.addWinner },
      id,
      {
        signature: 'add_property',
        trusted: true,
      },
    );

    if (data) {
      setWinnersAmount(data?.data?.winners);
    }
  };

  useEffect(() => {
    setValue({ playCount: value.playCount + 1 });

    if (hasRewards) {
      addWinner();
    }
  }, []);

  const getFinalResults = () => {
    let points = 0;
    let totalPoints = 0;
    const hasWon = totalPoints === points;

    results.forEach((item) => {
      const answers = item.answers.filter((answer) => answer.isCorrect === true);

      item.answers.forEach((answer) => {
        if (answer.isCorrect) {
          points += 1;
        }

        if (answer.isCorrect && answer.selected) {
          if (answer.allCorrect) {
            return (totalPoints += answers.length);
          }

          totalPoints += 1;
        }

        if (!answer.isCorrect && answer.selected && totalPoints > 0) {
          totalPoints -= 1;
        }
      });
    });

    return { points, totalPoints, hasWon };
  };

  const finalResults = getFinalResults();
  const approximateRewards = `${toLocaleString(Math.floor((rewardsAmount || 0) / (totalWinners || 0)))} ${rewardType}`;

  const getSocialShareText = () => {
    if (hasRewards && finalResults.hasWon) {
      return `I won ${approximateRewards} by taking a quiz! Check out ${title} by ${project?.name}, test your knowledge on `;
    }

    if (hasRewards) {
      return `I have taken a quiz by ${project?.name}. Can you beat my score of ${finalResults.totalPoints} / ${finalResults.points}? You can also win up to ${approximateRewards}!`;
    }

    return `I have taken a quiz by ${project?.name}. Can you beat my score of ${finalResults.totalPoints} / ${finalResults.points}? Test your knowledge on `;
  };

  return (
    <div className="flex justify-between gap-4 flex-col md:flex-row">
      <div className="flex-1">
        <Paper className="flex flex-col items-center text-center gap-4 mb-4" withBorder>
          <Text size="xs" color="dimmed">
            {formateDateWithHours(new Date().toString())}
          </Text>
          {hasRewards && finalResults.hasWon ? (
            <div>
              <GradientTitle order={1} className="mb-2">
                Congratulations!
              </GradientTitle>
              <Image src={Winner} height={320} layout="responsive" />
              <GradientTitle order={2}>You can claim your reward!</GradientTitle>
            </div>
          ) : (
            <div>
              <GradientTitle order={1} className="mb-2">
                Thank you for playing!
              </GradientTitle>
              <Image src={QuizImage} height={320} layout="responsive" />
            </div>
          )}

          <div>
            <GradientText size="lg">
              Your score: {finalResults.totalPoints} / {finalResults.points}
            </GradientText>

            {totalWinners ? (
              <GradientText size="lg">
                Winners: {finalResults.hasWon && winners !== totalWinners ? winnersAmount : winners || 0} /{' '}
                {totalWinners || 0}
              </GradientText>
            ) : null}
          </div>

          {hasRewards && finalResults.hasWon ? (
            <div>
              <GradientText size="xl" weight={700}>
                Your code: <strong>TCL_{nanoid(8)}</strong>
              </GradientText>
              <GradientText size="xl" weight={700}>
                Approximate rewards: {approximateRewards}
              </GradientText>
              <div className="flex flex-col items-center gap-2 mb-2">
                <Text size="sm" color="dimmed">
                  Please contact
                </Text>
                <ProjectTitle
                  title={project?.name as string}
                  size="sm"
                  component="a"
                  href={`${routes.project}/${project?.slug}`}
                  avatar={project?.logo?.url || ''}
                />
              </div>
              <Text size="xs" color="dimmed">
                Please use this code as a proof of your winnings. Take a screenshot of this code and follow the
                instructions below. Usually the project will require you to open a ticket on their discord channel.
                Alternativelly, you can contact us at TCL discord channel to process the winnings.
              </Text>
            </div>
          ) : null}

          <Divider className="w-full" />

          <div>
            <GradientText size="xl" weight={700} className="mb-2">
              Share this with your friends!
            </GradientText>

            <SocialShare
              title={getSocialShareText()}
              hashtag={(project?.slug as string) || 'TCL'}
              url={`${routes.base}${routes.quiz.replace('${slug}', slug as string)}`}
              size={30}
            />
          </div>

          {hasRewards && finalResults.hasWon ? (
            <Text size="sm">{onWinDescription}</Text>
          ) : (
            <Text size="sm">{onEndDescription}</Text>
          )}
        </Paper>

        <Paper withBorder>
          <TextContent richContent={description} />
        </Paper>
      </div>
      <div className="flex-1">
        <GradientTitle order={2}>{title}</GradientTitle>
        <GradientTitle order={4} className="mb-4">
          Review
        </GradientTitle>
        {results.map((question, questionIndex) => {
          return (
            <div className="mb-8" key={`result_${questionIndex}`}>
              <GradientText weight={600} className="mb-4">
                {question.question}
              </GradientText>
              <div>
                {question.answers.map((answer, answerIndex) => {
                  return (
                    <div
                      key={`result_${questionIndex}_${answerIndex}`}
                      className={`flex justify-between items-center mb-2 p-2 rounded-md border ${
                        answer.isCorrect && answer.selected && 'border-green-500'
                      } ${answer.isCorrect && !answer.selected && 'border-green-500'} ${
                        !answer.isCorrect && answer.selected && 'border-red-500'
                      }`}
                    >
                      {answer.answer}{' '}
                      <div
                        className={`${!answer.isCorrect && answer.selected && 'text-red-500'} ${
                          answer.isCorrect && answer.selected && 'text-green-500'
                        }`}
                      >
                        {answer.isCorrect && answer.selected && <Icons.Check />}{' '}
                        {!answer.isCorrect && answer.selected && <Icons.Cross />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizResults;
