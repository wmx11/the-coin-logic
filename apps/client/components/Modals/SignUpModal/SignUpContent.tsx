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
            <Text>Thank you for registering! You can now sign in!</Text>
          </Center>
        </>
      );
    }

    return <SignUpModalForm />;
  };

  return <DynamicContent />;
};

export default SignUpContent;
