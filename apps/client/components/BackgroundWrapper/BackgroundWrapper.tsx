import { Container, MantineNumberSize } from '@mantine/core';
import { FC, PropsWithChildren } from 'react';
import useThemeStore from 'store/useThemeStore';

type BackgroundWrapperProps = {
  className?: string;
  containerSize?: MantineNumberSize;
} & PropsWithChildren;

const BackgroundWrapper: FC<BackgroundWrapperProps> = ({ children, className }) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      className={`${className} bg-[url('../public/images/grid.svg')] ${
        theme === 'light' ? 'bg-lightBlue' : ''
      }  bg-repeat bg-center relative overflow-hidden`}
    >
      {children}
    </div>
  );
};

export const SmallBackgroundWrapper: FC<BackgroundWrapperProps> = ({ children, className, containerSize }) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      className={`${className}  ${
        theme === 'light'
          ? 'bg-slate-50 bg-[url("../public/images/grid_violet.svg")]'
          : `bg-[url("../public/images/grid_dark_mode.svg")]`
      } bg-repeat bg-center relative overflow-hidden`}
    >
      <Container className="py-24" size={containerSize}>
        {children}
      </Container>
    </div>
  );
};

export default BackgroundWrapper;
