import { Center, Text } from '@mantine/core';
import { BsCheck2Circle } from 'react-icons/bs';
import useLoginFlowStore from 'store/useLoginFlowStore';
import SignUpModalForm from './SignUpModalForm';

const SignUpContent = () => {
  const { isSuccess } = useLoginFlowStore((state) => state);

  const DynamicContent = () => {
    if (isSuccess) {
      return (
        <>
          <Center>
            <BsCheck2Circle size={60} color="#7950f2" />
          </Center>
          <Center>
            <div className="text-center">
              <Text>Thank you for registering!</Text>
              <Text color="violet" weight={600}>
                We have sent you an email verification code to your address. Please verify your email before continuing.
              </Text>
            </div>
          </Center>
        </>
      );
    }

    return <SignUpModalForm />;
  };

  return <DynamicContent />;
};

export default SignUpContent;
