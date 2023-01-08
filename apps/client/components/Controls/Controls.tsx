import { MantineNumberSize, Text } from '@mantine/core';
import React, { FC } from 'react';
import { Icons } from 'utils/icons';

type ControlsProps = {
  views?: number;
  likes?: number;
  showLikes?: boolean;
  showViews?: boolean;
  size?: MantineNumberSize;
  likeCallback?: () => void;
};

const Controls: FC<ControlsProps> = ({ views, likes, size, showLikes = true, showViews = true, likeCallback }) => {
  return (
    <Text size={size} color="dimmed" className="flex items-center gap-2">
      {showViews ? (
        <div className="flex items-center gap-2">
          <Icons.Eye /> {views || 0}
        </div>
      ) : null}
      •
      {showLikes ? (
        <div
          className={`${likeCallback ? 'cursor-pointer hover:text-red-500' : ''} flex items-center gap-2`}
          onClick={likeCallback || undefined}
        >
          <Icons.Heart /> {likes || 0}
        </div>
      ) : null}
    </Text>
  );
};

export default Controls;
