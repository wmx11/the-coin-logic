import { Paper as PaperComponent } from '@mantine/core';
import { FC, PropsWithChildren } from 'react';

type PaperProps = {
  className?: string;
  withBorder?: boolean;
  onClick?: () => void;
} & PropsWithChildren;

const Paper: FC<PaperProps> = ({ children, className, withBorder, onClick }) => {
  return (
    <PaperComponent
      withBorder={withBorder}
      p="md"
      shadow="sm"
      className={`hover:shadow-lg transition-shadow ${className}`}
      onClick={onClick}
    >
      {children}
    </PaperComponent>
  );
};

export default Paper;
