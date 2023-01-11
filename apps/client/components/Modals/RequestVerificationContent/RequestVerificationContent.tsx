import { Center, Text } from '@mantine/core';
import useLoginFlowStore from 'store/useLoginFlowStore';
import RequestVerificationForm from './RequestVerificationForm';

const RequestVerificationContent = () => {
  const userLoginState = useLoginFlowStore((state) => state);

  if (userLoginState.isSuccess && userLoginState.isRequestVerification) {
    return (
      <>
        <Center>
          <Text>We have sent a password recovery link to your email address.</Text>
        </Center>
      </>
    );
  }

  return <RequestVerificationForm />;
};

export default RequestVerificationContent;
