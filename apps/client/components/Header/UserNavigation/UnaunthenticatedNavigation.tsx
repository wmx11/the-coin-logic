import { Button } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import useLoginFlowStore from 'store/useLoginFlowStore';

const UnaunthenticatedNavigation = () => {
  const { setLogin, setRegister } = useLoginFlowStore((state) => state);
  return (
    <>
      <div className="flex gap-4 items-center justify-center">
        <Button
          onClick={() => {
            setLogin(true);
          }}
          color="violet"
          variant="white"
        >
          Sign In
        </Button>
        <GradientButton
          onClick={() => {
            setRegister(true);
          }}
        >
          Sign Up
        </GradientButton>
      </div>
    </>
  );
};

export default UnaunthenticatedNavigation;
