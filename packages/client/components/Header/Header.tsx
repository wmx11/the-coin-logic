import { Avatar, Button, Container, Divider, Menu, Text, UnstyledButton } from '@mantine/core';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import SignInModal from '../Modals/SignInModal';
import SignUpModal from '../Modals/SignUpModal';
import tclLogo from '../../public/images/tcl_logo.png';

function Header() {
  const [signUpOpened, seSignUpOpened] = useState(false);
  const [signInOpened, setSignInOpened] = useState(false);

  const { data: session, status } = useSession();

  return (
    <div className="bg-lightBlue">
      <Container>
        <div className="flex justify-between text-white py-3">
          <div className="flex gap-x-8 items-center">
            <div className="">
              <Link href="/">
                <a className="block">
                  <Image
                    src={tclLogo}
                    alt="TCL Logo"
                    width={30}
                    height={35}
                    placeholder="blur"
                  />
                </a>
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

          {!status ||
            ((status === 'unauthenticated' || status === 'loading') && (
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
            ))}

          {status === 'authenticated' && (
            <div className="flex gap-4 items-center">
              <Menu
                shadow="md"
                trigger="hover"
                control={
                  <Avatar color="violet" src={null} size="md" radius="xl">
                    {session?.user?.name?.slice(0, 2).toUpperCase()}
                  </Avatar>
                }
              >
                <Menu.Label>{session?.user?.name}</Menu.Label>
                <Divider />
                <Menu.Item icon={<FiLogOut />} color="violet">
                  <UnstyledButton onClick={() => signOut({ redirect: false })}>
                    <Text size="xs">Log Out</Text>
                  </UnstyledButton>
                </Menu.Item>
              </Menu>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Header;
