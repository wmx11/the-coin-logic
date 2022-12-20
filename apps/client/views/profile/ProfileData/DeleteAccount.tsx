import { Button, Divider, Text } from '@mantine/core';
import GradientTitle from 'components/Text/GradientTitle';
import { FaExclamation } from 'react-icons/fa';
import useLoginFlowStore from 'store/useLoginFlowStore';

const DeleteAccount = () => {
  const { setAccountDelete } = useLoginFlowStore((state) => state);

  return (
    <div className="mb-10">
      <GradientTitle order={3} className="flex gap-2 items-center mb-2">
        <FaExclamation size={15} className="text-violet" />
        Danger zone
      </GradientTitle>

      <Divider size={1} className="my-2" />

      <Text size="xs" color="dimmed" className="mb-4">
        If you no longer intend to use this account, you can choose to delete it. All related information will be
        destroyed. All listed projects will no longer be tracked or listed.
      </Text>
      <Button variant="outline" color="red" onClick={() => setAccountDelete(true)}>
        Delete Account
      </Button>
    </div>
  );
};

export default DeleteAccount;
