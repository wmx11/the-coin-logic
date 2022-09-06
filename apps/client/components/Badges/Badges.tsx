import React, { FC } from 'react';
import { Badge } from '@mantine/core';
import { Tag } from 'types';

type BadgesProps = {
  badges: Tag[];
};

const Badges: FC<BadgesProps> = ({ badges }) => {
  if (!badges) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map(({ name }, index: number) => {
        return (
          <Badge key={`${name}_${index}`} color="violet" size="sm">
            {name}
          </Badge>
        );
      })}
    </div>
  );
};

export default Badges;
