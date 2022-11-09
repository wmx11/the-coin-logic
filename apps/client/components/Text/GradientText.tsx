import { DefaultProps, Text, TextProps } from '@mantine/core';
import React, { FC, PropsWithChildren } from 'react';

type GradientTextProps = {} & PropsWithChildren & TextProps & DefaultProps;

const GradientText: FC<GradientTextProps> = (props) => {
  return (
    <Text {...props} variant="gradient" gradient={{ from: 'violet', to: 'grape' }}>
      {props.children}
    </Text>
  );
};

export default GradientText;
