import { ActionIcon, Text, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import React, { FC } from 'react';
import { FiCheckCircle, FiCopy } from 'react-icons/fi';

type ClipboardButtonProps = {
  copy: string;
  title?: string;
};

const ClipboardButton: FC<ClipboardButtonProps> = ({ copy, title }) => {
  const clipboard = useClipboard({ timeout: 2000 });

  return (
    <Tooltip label={clipboard.copied ? 'Copied' : 'Copy'} withArrow position="right">
      <div className="flex items-center gap-2">
        <Text size="xs" color="dimmed">
          {title}
        </Text>
        <ActionIcon color="violet" onClick={() => clipboard.copy(copy)}>
          {clipboard.copied ? <FiCheckCircle /> : <FiCopy />}
        </ActionIcon>
      </div>
    </Tooltip>
  );
};

export default ClipboardButton;
