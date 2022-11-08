import React, { FC } from 'react';
import { Badge, Group, Tooltip } from '@mantine/core';
import { Tag } from 'types';

type BadgesProps = {
  badges: Tag[];
  isLimited?: boolean;
};

const Badges: FC<BadgesProps> = ({ badges, isLimited = true}) => {
  if (!badges) {
    return null;
  }

  if (isLimited && badges.length > 2) {
    return (
      <Tooltip
        withArrow
        styles={{ tooltip: { maxWidth: 180 } }}
        label={
          <Group spacing="xs" position="center">
            {badges.map(({ name }, index: number) => {
              return (
                <Badge key={`${name}_${index}_tooltip`} color="violet" size="xs" variant="filled">
                  {name}
                </Badge>
              );
            })}
          </Group>
        }
      >
        <Badge color="violet" size="xs">
          {badges[0].name}...
        </Badge>
      </Tooltip>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map(({ name }, index: number) => {
        return (
          <Badge key={`${name}_${index}`} color="violet" size="xs">
            {name}
          </Badge>
        );
      })}
    </div>
  );
};

export default Badges;
