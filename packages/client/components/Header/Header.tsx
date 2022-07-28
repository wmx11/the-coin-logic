import { Button, Container, Group } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

function Header() {
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
            <div>Products</div>
            <div>Resources</div>
            <div>
              <Link href="/about-us">
                <a>About Us</a>
              </Link>
            </div>
            <div>
              <Link href="/roadmap">
                <a>Roadmap</a>
              </Link>
            </div>
            <div>
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div>Log In</div>
            <Button color="violet">Sign Up</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
