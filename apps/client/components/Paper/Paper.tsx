import { Paper as PaperComponent } from '@mantine/core';
import { FC, PropsWithChildren } from 'react';

type PaperProps = {
  className?: string;
} & PropsWithChildren;

const Paper: FC<PaperProps> = ({ children, className }) => {
  return (
    <PaperComponent p="md" shadow="sm" withBorder className={`hover:shadow-lg transition-shadow ${className}`}>
      {children}
    </PaperComponent>
  );
};

export default Paper;
