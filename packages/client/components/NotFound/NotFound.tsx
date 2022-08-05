import { Paper } from '@mantine/core';
import React, { ReactNode, FC } from 'react';
import { GiSadCrab } from 'react-icons/gi';

type NotFoundProps = {
  content?: ReactNode | string;
}

const NotFound: FC<NotFoundProps> = ({ content }) => {
  const text = "Oops! We can't find the resource you are looking for!";

  return (
    <Paper p="xl" shadow="xl" withBorder>
      <div className="flex items-center gap-2">
        <GiSadCrab size={30} />
        {text || content}
      </div>
    </Paper>
  );
};

export default NotFound;
