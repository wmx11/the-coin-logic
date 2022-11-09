import { Button, Paper, Progress, Text } from '@mantine/core';
import axios from 'axios';
import useUser from 'hooks/useUser';
import { ProjectRatings } from 'pages/api/project/get-rates';
import { FC, useState, useEffect } from 'react';
import routes from 'routes';
import { Project } from 'types';
import { Icons } from 'utils/icons';

type CommunityVotesProps = {
  project: Project;
  ratings: ProjectRatings;
};

const CommunityVotes: FC<CommunityVotesProps> = ({ project, ratings }) => {
  if (!project) {
    return null;
  }

  const [isRatingChecked, setIsRatingChecked] = useState(false);
  const [isRated, setIsRated] = useState(false);
  const [rates, setRates] = useState(ratings);

  const { user, session, status } = useUser();
  const { name } = project;

  const checkIfUserHasRatedToday = async () => {
    if (status === 'loading' || isRatingChecked) {
      return;
    }

    const { data: isRatedToday } = await axios.post(routes.api.project.rateCheck, {
      project,
      user,
    });

    setIsRatingChecked(true);

    if (!isRatedToday) {
      return setIsRated(false);
    }

    setIsRated(isRatedToday.isRatedToday);
  };

  useEffect(() => {
    checkIfUserHasRatedToday();
  }, [user, session, status]);

  const handleClick = async (rating: number) => {
    await axios.post(routes.api.project.rate, {
      rating: rating.toString(),
      project,
      user,
    });

    setIsRated(true);

    const { data: rates } = await axios.post(routes.api.project.getRates, {
      project,
    });

    setRates(rates.ratings);
  };

  return (
    <Paper p="md" shadow="sm" withBorder className="flex justify-between items-center flex-col md:flex-row">
      <div className="flex-1 md:max-w-[50%] w-full">
        {isRated ? (
          <>
            <Text size="md" weight={700}>
              Thank you for voting for {name}!
            </Text>
            <Text size="xs" color="dimmed">
              You can vote again in 24 hours
            </Text>
          </>
        ) : (
          <>
            <Text size="md" weight={700}>
              How will you rate {name} today?
            </Text>
            <Text size="xs" color="dimmed">
              Vote to see community sentiment
            </Text>
          </>
        )}
      </div>
      <div className="flex gap-2 flex-1 justify-end md:max-w-[50%] w-full items-center">
        {isRated ? (
          <div className="flex-1">
            {rates && (
              <div>
                <Progress
                  color="teal"
                  sections={[
                    { value: rates.positivePercentage as number, color: 'teal' },
                    { value: rates.negativePercentage as number, color: 'pink' },
                  ]}
                  size="md"
                />
                <div className="flex w-full justify-between items-center mt-2">
                  <Text size="xs" color="dimmed" className="flex gap-2 items-center">
                    {rates.positivePercentage}% Good <Icons.ThumbsUp />
                  </Text>
                  <Text size="xs" color="dimmed" className="flex gap-2 items-center">
                    {rates.negativePercentage}% Bad <Icons.ThumbsDown />
                  </Text>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <Button color="teal" leftIcon={<Icons.ThumbsUp />} onClick={() => handleClick(1)}>
              Good
            </Button>
            <Button color="red" leftIcon={<Icons.ThumbsDown />} onClick={() => handleClick(0)}>
              Bad
            </Button>
          </>
        )}
      </div>
    </Paper>
  );
};

export default CommunityVotes;
