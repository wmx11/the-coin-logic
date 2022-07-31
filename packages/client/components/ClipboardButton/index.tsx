import { ActionIcon, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import React, { FC } from 'react';
import { FiCheckCircle, FiCopy } from 'react-icons/fi';

type ClipboardButtonProps = {
  copy: string;
};

const ClipboardButton: FC<ClipboardButtonProps> = ({ copy }) => {
  const clipboard = useClipboard({ timeout: 2000 });

  return (
    <Tooltip label={clipboard.copied ? 'Copied' : 'Copy'} withArrow position="right">
      <ActionIcon color="violet" onClick={() => clipboard.copy(copy)}>
        {clipboard.copied ? <FiCheckCircle /> : <FiCopy />}
      </ActionIcon>
    </Tooltip>
  );
};

export default ClipboardButton;
