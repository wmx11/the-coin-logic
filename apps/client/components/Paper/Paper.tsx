import { Paper as PaperComponent } from '@mantine/core';
import { FC, PropsWithChildren } from 'react';
import useThemeStore from 'store/useThemeStore';
import { themeConfig } from 'utils/theme';

type PaperProps = {
  className?: string;
  withBorder?: boolean;
  onClick?: () => void;
} & PropsWithChildren;

const Paper: FC<PaperProps> = ({ children, className, withBorder, onClick }) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <PaperComponent
      withBorder
      p="md"
      className={`hover:shadow-lg hover:shadow-violet/10 transition-shadow ${className} shadow-md shadow-violet/10`}
      onClick={onClick}
      style={theme === 'dark' ? { backgroundColor: themeConfig[theme].backgroundColorLighter } : {}}
    >
      {children}
    </PaperComponent>
  );
};

export default Paper;
