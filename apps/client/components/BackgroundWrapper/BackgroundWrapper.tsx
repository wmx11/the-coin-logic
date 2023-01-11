import { Container } from '@mantine/core';
import React, { FC, PropsWithChildren } from 'react';
import useThemeStore from 'store/useThemeStore';
import { themeConfig } from 'utils/theme';

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
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      className={`${className}  ${
        theme === 'light'
          ? 'bg-slate-50 bg-[url("../public/images/grid_violet.svg")]'
          : `bg-[url("../public/images/grid_dark_mode.svg")]`
      } bg-repeat relative overflow-hidden`}
    >
      <Container className="py-24">{children}</Container>
    </div>
  );
};

export default BackgroundWrapper;
