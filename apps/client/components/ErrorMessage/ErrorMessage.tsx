import { Text } from '@mantine/core';
import React, { FC } from 'react';

type ErrorMessageTypes = {
  message: string;
};

const ErrorMessage: FC<ErrorMessageTypes> = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <Text size="sm" color="red">
      {message}
    </Text>
  );
};

export default ErrorMessage;
