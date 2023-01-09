import { Modal as MantineModal } from '@mantine/core';
import { FC, ReactNode } from 'react';

type ModalProps = {
  opened: boolean;
  size?: number | string;
  onClose: () => void;
  children: ReactNode;
};

const Modal: FC<ModalProps> = ({ opened, children, size, onClose }) => {
  return (
    <MantineModal centered opened={opened} onClose={onClose} withinPortal={false} size={size} trapFocus={true}>
      {children}
    </MantineModal>
  );
};

export default Modal;
