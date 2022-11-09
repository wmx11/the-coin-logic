import { Button, ButtonProps, ButtonStylesNames, ButtonStylesParams, DefaultProps } from '@mantine/core';
import React, { FC, PropsWithChildren } from 'react';

type GradientButtonProps = {
  component?: any;
  href?: string;
  target?: string;
  onClick?: () => void;
} & PropsWithChildren &
  ButtonProps &
  DefaultProps<ButtonStylesNames, ButtonStylesParams>;

const GradientButton: FC<GradientButtonProps> = React.forwardRef((props, ref) => {
  return (
    <Button {...props} ref={ref} variant="gradient" gradient={{ from: 'violet', to: 'grape' }}>
      {props.children}
    </Button>
  );
});

export default GradientButton;
