import { DefaultProps, Title, TitleProps } from '@mantine/core';
import { FC, PropsWithChildren } from 'react';

type GradientTitleProps = {} & PropsWithChildren & TitleProps & DefaultProps;

const GradientTitle = (props: GradientTitleProps) => {
  return (
    <Title {...props} variant="gradient" gradient={{ from: 'violet', to: 'grape' }}>
      {props.children}
    </Title>
  );
};

export default GradientTitle;
