import { Button, Divider, Text, Title } from '@mantine/core';
import React from 'react';
import { FaUserLock } from 'react-icons/fa';
import useLoginFlowStore from 'store/useLoginFlowStore';

const ChangePassword = () => {
  const { setRequestResetPassword, setIsInitial } = useLoginFlowStore((state) => state);
  return (
    <div className="mb-14">
      <Title order={3} className="flex gap-2 items-center mb-2 text-violet">
        <FaUserLock size={18} />
        Password
      </Title>
      <Text size="xs" color="dimmed" className="mb-4">
        Did the old password get boring? No worries, you can change it to a new one!
      </Text>
      <Button
        className="mb-4"
        variant="outline"
        color="red"
        onClick={() => {
          setRequestResetPassword(true);
          setIsInitial(true);
        }}
      >
        Change Password
      </Button>
      <Divider size={1} />
    </div>
  );
};

export default ChangePassword;
