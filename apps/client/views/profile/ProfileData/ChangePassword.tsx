import { Button, Divider, Text } from '@mantine/core';
import GradientTitle from 'components/Text/GradientTitle';
import { FaUserLock } from 'react-icons/fa';
import useLoginFlowStore from 'store/useLoginFlowStore';

const ChangePassword = () => {
  const { setRequestResetPassword, setIsInitial } = useLoginFlowStore((state) => state);
  return (
    <div className="mb-10">
      <GradientTitle order={3} className="flex gap-2 items-center mb-2">
        <FaUserLock size={18} className="text-violet" />
        Password
      </GradientTitle>

      <Divider size={1} className="my-2" />

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
    </div>
  );
};

export default ChangePassword;
