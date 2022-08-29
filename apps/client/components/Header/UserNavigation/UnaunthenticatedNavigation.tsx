import { Button } from '@mantine/core';
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
        <Button
          onClick={() => {
            setRegister(true);
          }}
          color="violet"
        >
          Sign Up
        </Button>
      </div>
    </>
  );
};

export default UnaunthenticatedNavigation;
