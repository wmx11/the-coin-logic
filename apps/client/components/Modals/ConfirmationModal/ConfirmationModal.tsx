import { Button, Text } from '@mantine/core';
import Modal from 'components/Modal/Modal';
import React from 'react';
import useConfirmationStore from 'store/useConfirmationStore';

const ConfirmationModal = () => {
  const confirmationStore = useConfirmationStore((state) => state);

  return (
    <Modal
      opened={confirmationStore.isConfirmationRequired}
      onClose={() => confirmationStore.resetConfirmationRequired()}
    >
      <Text align="center">Do you want to perform this action?</Text>

      <div className="flex justify-center gap-2 my-4">
        <Button
          variant="outline"
          color="violet"
          onClick={() => {
            confirmationStore.confirmationAction();
            confirmationStore.resetConfirmationRequired();
          }}
        >
          Yes
        </Button>
        <Button variant="outline" color="red" onClick={() => confirmationStore.resetConfirmationRequired()}>
          No
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
