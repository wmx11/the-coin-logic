import React, { FC, PropsWithChildren } from 'react';

type GrayBoxProps = {
  className?: string;
} & PropsWithChildren;

const GrayBox: FC<GrayBoxProps> = ({ className, children }) => {
  return (
    <div className={`bg-zinc-100 p-10 flex flex-col items-center justify-center gap-4 rounded-md mb-8 ${className}`}>
      {children}
    </div>
  );
};

export default GrayBox;
