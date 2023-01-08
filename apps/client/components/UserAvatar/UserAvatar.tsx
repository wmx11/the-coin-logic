import { Avatar } from '@mantine/core';
import React, { FC } from 'react';

type UserAvatarTypes = {
  name: string;
};

const UserAvatar: FC<UserAvatarTypes> = ({ name }) => {
  return (
    <Avatar color="violet" src={null} size="md" radius="xl">
      {name ? name.slice(0, 2).toUpperCase() : '.'}
    </Avatar>
  );
};

export default UserAvatar;
