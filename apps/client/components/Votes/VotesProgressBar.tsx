import { Progress, Text } from '@mantine/core';
import { VoteReturnType } from 'hooks/useVotes';
import React, { FC } from 'react';
import { Icons } from 'utils/icons';

type VotesProgressBarProps = {
  votes: VoteReturnType;
  positiveText?: string;
  negativeText?: string;
  positiveIcon?: React.ReactNode;
  negativeIcon?: React.ReactNode;
};

const VotesProgressBar: FC<VotesProgressBarProps> = ({
  votes,
  positiveText,
  negativeText,
  positiveIcon,
  negativeIcon,
}) => {
  return (
    <div>
      <Progress
        color="teal"
        sections={[
          { value: votes.positivePercentage as number, color: 'teal' },
          { value: votes.negativePercentage as number, color: 'pink' },
        ]}
        size="md"
      />
      <div className="flex w-full justify-between items-center mt-2">
        <Text size="xs" color="dimmed">
          <div className="flex gap-2 items-center">
            {votes.positivePercentage}% {positiveText || 'Good'} {positiveIcon || <Icons.ThumbsUp />}
          </div>
          <div>
            {votes?.positive} / {votes?.total}
          </div>
        </Text>
        <Text size="xs" color="dimmed">
          <div className="flex gap-2 items-center">
            {votes.negativePercentage}% {negativeText || 'Bad'} {negativeIcon || <Icons.ThumbsDown />}
          </div>
          <div>
            {votes?.negative} / {votes?.total}
          </div>
        </Text>
      </div>
    </div>
  );
};

export default VotesProgressBar;
