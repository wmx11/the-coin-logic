import { Button, Text } from '@mantine/core';
import Paper from 'components/Paper';
import GradientText from 'components/Text/GradientText';
import VotesProgressBar from 'components/Votes/VotesProgressBar';
import useVotes from 'hooks/useVotes';
import { FC, useEffect } from 'react';
import { Project } from 'types';
import { Icons } from 'utils/icons';

type CommunityVotesProps = {
  project: Project;
};

const CommunityVotes: FC<CommunityVotesProps> = ({ project }) => {
  if (!project) {
    return null;
  }

  const { votes, canVote, hasVoted, fetchVotes, canUserVoteToday, vote } = useVotes();
  const { name, id } = project;

  useEffect(() => {
    fetchVotes({ type: 'vote', projectId: id, isStartOfDay: true });
    canUserVoteToday({ projectId: id, type: 'vote' });
  }, [hasVoted]);

  return (
    <Paper className="flex justify-between items-center flex-col md:flex-row">
      <div className="flex-1 md:max-w-[50%] w-full">
        {hasVoted || !canVote ? (
          <>
            <GradientText size="md" weight={700}>
              Thank you for voting for {name}!
            </GradientText>
            <Text size="xs" color="dimmed">
              You can vote again in 24 hours
            </Text>
          </>
        ) : (
          <>
            <GradientText size="md" weight={700}>
              How do you feel about {name} today?
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
              onClick={() => vote({ type: 'vote', projectId: id, value: 1 })}
            >
              Good
            </Button>
            <Button
              color="red"
              leftIcon={<Icons.ThumbsDown />}
              onClick={() => vote({ type: 'vote', projectId: id, value: 0 })}
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
