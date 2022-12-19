import { MantineNumberSize, Text } from '@mantine/core';
import React, { FC } from 'react';
import { Icons } from 'utils/icons';

type ControlsProps = {
  views?: number;
  likes?: number;
  size?: MantineNumberSize;
  likeCallback?: () => void;
};

const Controls: FC<ControlsProps> = ({ views, likes, size, likeCallback }) => {
  return (
    <Text size={size} color="dimmed" className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <Icons.Eye /> {views || 0}
      </div>
      •
      <div
        className={`${likeCallback ? 'cursor-pointer hover:text-red-500' : ''} flex items-center gap-2`}
        onClick={likeCallback || undefined}
      >
        <Icons.Heart /> {likes || 0}
      </div>
    </Text>
  );
};

export default Controls;
