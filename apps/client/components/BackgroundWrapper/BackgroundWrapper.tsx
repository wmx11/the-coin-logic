import { Container } from '@mantine/core';
import React, { FC, PropsWithChildren } from 'react';

type BackgroundWrapperProps = {
  className?: string;
} & PropsWithChildren;

const BackgroundWrapper: FC<BackgroundWrapperProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} bg-[url('../public/images/grid.svg')] bg-lightBlue bg-repeat relative overflow-hidden`}
    >
      {children}
    </div>
  );
};

export const SmallBackgroundWrapper: FC<BackgroundWrapperProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} bg-[url('../public/images/grid_violet.svg')] bg-slate-50 bg-repeat relative overflow-hidden`}
    >
      <Container className="py-24">{children}</Container>
    </div>
  );
};

export default BackgroundWrapper;
