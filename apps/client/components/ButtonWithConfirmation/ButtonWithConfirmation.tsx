import { Button, ButtonProps } from '@mantine/core';
import { FC, ReactNode } from 'react';
import useConfirmationStore from 'store/useConfirmationStore';

type ButtonWithConfirmationProps = {
  action: () => void;
  color?: ButtonProps['color'];
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  leftIcon?: ButtonProps['leftIcon'];
  children: ReactNode;
};

const ButtonWithConfirmation: FC<ButtonWithConfirmationProps> = ({
  action,
  color,
  variant,
  children,
  size,
  leftIcon,
}) => {
  const confirmationStore = useConfirmationStore((state) => state);

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      leftIcon={leftIcon}
      onClick={() => {
        confirmationStore.setIsConfirmationRequired(true);
        confirmationStore.setConfirmationAction(action);
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonWithConfirmation;
