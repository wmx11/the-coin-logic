import { Button } from '@mantine/core';
import React, { FC } from 'react';
import { Icons } from 'utils/icons';

type VoteButtonProps = {
  color?: string;
  icon?: React.ReactNode;
  children: string;
};

const VoteButton: FC<VoteButtonProps> = ({ color, icon, children }) => {
  return (
    <Button color={color} leftIcon={icon}>
      {children}
    </Button>
  );
};

export const PositiveVote: FC<VoteButtonProps> = ({ color, icon, children }) => {
  return (
    <VoteButton color={color || 'teal'} icon={icon || <Icons.ThumbsUp />}>
      {children}
    </VoteButton>
  );
};
export const NegativeVote: FC<VoteButtonProps> = ({ color, icon, children }) => {
  return (
    <VoteButton color={color || 'red'} icon={icon || <Icons.ThumbsDown />}>
      {children}
    </VoteButton>
  );
};
