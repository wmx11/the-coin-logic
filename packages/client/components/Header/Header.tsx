import { Button, Container } from '@mantine/core';
import Link from 'next/link';
import React, { useState } from 'react';
import SignInModal from '../Modals/SignInModal';
import SignUpModal from '../Modals/SignUpModal';

function Header() {
  const [signUpOpened, seSignUpOpened] = useState(false);
  const [signInOpened, setSignInOpened] = useState(false);
  
  return (
    <div className="bg-lightBlue">
      <Container>
        <div className="flex justify-between text-white py-5">
          <div className="flex gap-8 items-center">
            <div className="font-bold">
              <Link href="/">
                <a>TCL Logo</a>
              </Link>
            </div>
            <div className="font-bold hover:underline">Products</div>
            <div className="font-bold hover:underline">Resources</div>
            <div>
              <Link href="/about-us">
                <a className="font-bold hover:underline">About Us</a>
              </Link>
            </div>
            <div>
              <Link href="/roadmap">
                <a className="font-bold hover:underline">Roadmap</a>
              </Link>
            </div>
            <div>
              <Link href="/pricing">
                <a className="font-bold hover:underline">Pricing</a>
              </Link>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <Button onClick={() => setSignInOpened(true)} color="violet" variant="white">
              Sign In
            </Button>
            <Button onClick={() => seSignUpOpened(true)} color="violet">
              Sign Up
            </Button>
          </div>
        </div>

        <SignInModal opened={signInOpened} setOpened={() => setSignInOpened(false)} />
        <SignUpModal opened={signUpOpened} setOpened={() => seSignUpOpened(false)} />
      </Container>
    </div>
  );
}

export default Header;
