import { Modal as MantineModal } from '@mantine/core';
import { FC, ReactNode } from 'react';

type ModalProps = {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: FC<ModalProps> = ({ opened, children, onClose }) => {
  return (
    <MantineModal centered opened={opened} onClose={onClose} withinPortal={false}>
      {children}
    </MantineModal>
  );
};

export default Modal;
