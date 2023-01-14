import React, { FC, PropsWithChildren } from 'react';
import useThemeStore from 'store/useThemeStore';
import { themeConfig } from 'utils/theme';

type GrayBoxProps = {
  className?: string;
} & PropsWithChildren;

const GrayBox: FC<GrayBoxProps> = ({ className, children }) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      style={{
        backgroundColor: themeConfig[theme].backgroundColorLighter,
      }}
      className={`p-10 flex flex-col items-center justify-center gap-4 rounded-md mb-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default GrayBox;
