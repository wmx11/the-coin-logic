import { Center, Text } from '@mantine/core';
import useLoginFlowStore from 'store/useLoginFlowStore';
import RequestPasswordResetForm from './RequestPasswordResetForm';

const RequestPasswordResetContent = () => {
  const userLoginState = useLoginFlowStore((state) => state);

  if (userLoginState.isSuccess && userLoginState.isRequestResetPassword) {
    return (
      <>
        <Center>
          <Text>We have sent a password recovery link to your email address.</Text>
        </Center>
      </>
    );
  }

  return <RequestPasswordResetForm />;
};

export default RequestPasswordResetContent;
