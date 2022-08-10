import { Avatar, Badge } from '@mantine/core';
import React, { FC } from 'react';
import { Network } from 'types';

type NetworkBadgeProps = {
  network: Network;
  showName?: boolean;
};

const NetworkBadge: FC<NetworkBadgeProps> = ({ network, showName }) => {
  return showName ? (
    <Badge
      color="violet"
      variant="outline"
      size="md"
      leftSection={<Avatar alt="Avatar for badge" size={15} src={network?.logo?.url} />}
    >
      {network.name}
    </Badge>
  ) : (
    <Avatar alt="Avatar for badge" size={20} src={network?.logo?.url} />
  );
};

export default NetworkBadge;
