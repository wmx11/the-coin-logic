import { Button } from '@mantine/core';
import SignInModal from 'components/Modals/SignInModal';
import SignUpModal from 'components/Modals/SignUpModal';
import React, { useState } from 'react';

const UnaunthenticatedNavigation = () => {
  const [signUpOpened, seSignUpOpened] = useState(false);
  const [signInOpened, setSignInOpened] = useState(false);

  return (
    <>
      <div className="flex gap-4 items-center">
        <Button onClick={() => setSignInOpened(true)} color="violet" variant="white">
          Sign In
        </Button>
        <Button onClick={() => seSignUpOpened(true)} color="violet">
          Sign Up
        </Button>
      </div>
      <SignInModal opened={signInOpened} setOpened={() => setSignInOpened(false)} />
      <SignUpModal opened={signUpOpened} setOpened={() => seSignUpOpened(false)} />
    </>
  );
};

export default UnaunthenticatedNavigation;
