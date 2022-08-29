import { DocumentNode, useMutation } from '@apollo/client';
import { Button, Stack, Text, TextInput } from '@mantine/core';
import { DELETE_USER } from 'data/mutations';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import useUserStore from 'store/useUserStore';
import { User } from 'types';

const DeleteAccountContent = () => {
  const [inputValue, setInputValue] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [deleteUser, { data, loading, error }] = useMutation(DELETE_USER as DocumentNode);
  const user = useUserStore((state) => state.user) as User;

  const DELETE = 'DELETE';

  useEffect(() => {
    if (inputValue === DELETE) {
      return setDisabled(false);
    }

    setDisabled(true);
  }, [inputValue]);

  const handleDelete = async () => {
    try {
      await deleteUser({ variables: { email: user.email } });
      signOut({ redirect: true, callbackUrl: '/' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack>
      <Text size="xs" color="dimmed" className="mb-4">
        If you no longer intend to use this account, you can choose to delete it. All related information will be
        destroyed. All listed projects will no longer be tracked or listed.
      </Text>
      <TextInput
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
        required
        placeholder="DELETE"
        error
        label="Delete your account"
        description="Type in DELETE and click the button below"
      />
      <Button color="red" disabled={disabled} onClick={handleDelete} loading={loading}>
        Delete my account
      </Button>
    </Stack>
  );
};

export default DeleteAccountContent;
