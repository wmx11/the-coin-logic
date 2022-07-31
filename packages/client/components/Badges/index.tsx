import React, { FC } from 'react';
import { Badge } from '@mantine/core';

interface BadgesProps {
  badges: {
    name: string;
  }[];
}

const Badges: FC<BadgesProps> = ({ badges }) => {
  return (
    badges && (
      <div className="flex flex-wrap gap-2">
        {badges.map(({ name }, index: number) => {
          return (
            <Badge key={`${name}_${index}`} color="violet">
              {name}
            </Badge>
          );
        })}
      </div>
    )
  );
};

export default Badges;
