import { Button, Text } from '@mantine/core';
import Paper from 'components/Paper';
import GradientText from 'components/Text/GradientText';
import VotesProgressBar from 'components/Votes/VotesProgressBar';
import useVotes from 'hooks/useVotes';
import { FC, useEffect } from 'react';
import { Project, Provider } from 'types';
import { Icons } from 'utils/icons';

type CommunityVotesProps = {
  project?: Project;
  provider?: Provider;
};

const CommunityVotes: FC<CommunityVotesProps> = ({ project, provider }) => {
  const { votes, canVote, hasVoted, fetchVotes, canUserVoteToday, vote } = useVotes();

  useEffect(() => {
    fetchVotes({
      type: 'vote',
      projectId: project?.id || undefined,
      isStartOfDay: true,
      providerId: provider?.id || undefined,
    });
    canUserVoteToday({ projectId: project?.id || undefined, type: 'vote', providerId: provider?.id || undefined });
  }, [hasVoted]);

  return (
    <Paper withBorder className="flex justify-between items-center flex-col md:flex-row">
      <div className="flex-1 md:max-w-[50%] w-full">
        {hasVoted || !canVote ? (
          <>
            <GradientText size="md" weight={700}>
              Thank you for voting for {project?.name || provider?.name}!
            </GradientText>
            <Text size="xs" color="dimmed">
              You can vote again in 24 hours
            </Text>
          </>
        ) : (
          <>
            <GradientText size="md" weight={700}>
              How do you feel about {project?.name || provider?.name} today?
            </GradientText>
            <Text size="xs" color="dimmed">
              Vote to see community sentiment
            </Text>
          </>
        )}
      </div>
      <div className="flex gap-2 flex-1 justify-end md:max-w-[50%] w-full items-center">
        {canVote ? (
          <>
            <Button
              color="teal"
              leftIcon={<Icons.ThumbsUp />}
              onClick={() =>
                vote({
                  type: 'vote',
                  projectId: project?.id || undefined,
                  providerId: provider?.id || undefined,
                  value: 1,
                })
              }
            >
              Good
            </Button>
            <Button
              color="red"
              leftIcon={<Icons.ThumbsDown />}
              onClick={() =>
                vote({
                  type: 'vote',
                  projectId: project?.id || undefined,
                  providerId: provider?.id || undefined,
                  value: 0,
                })
              }
            >
              Bad
            </Button>
          </>
        ) : (
          <div className="flex-1">{votes ? <VotesProgressBar votes={votes} /> : null}</div>
        )}
      </div>
    </Paper>
  );
};

export default CommunityVotes;
