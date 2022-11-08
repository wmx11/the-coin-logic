import { Burger, Container, Drawer } from '@mantine/core';
import useMobileScreen from 'hooks/useMobileScreen';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import tclLogo from '../../public/images/tcl_logo.png';
import Navigation from './Navigation';
import UserNavigation from './UserNavigation';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobileScreen } = useMobileScreen();

  return (
    <div className="z-20 w-full bg-lightBlue relative">
      <Container className={`${isMobileScreen && 'flex items-center justify-end py-3 w-full'}`}>
        {isMobileScreen && (
          <Drawer
            opened={isOpen}
            onClose={() => setIsOpen(false)}
            overlayOpacity={0.55}
            overlayBlur={3}
            size="lg"
            padding="xl"
            position="right"
            withinPortal={false}
            className="overflow-auto"
            styles={{ drawer: { background: '#17153A' } }}
          >
            <Navigation setIsOpen={setIsOpen} />
            <UserNavigation setIsOpen={setIsOpen} />
          </Drawer>
        )}

        <div className="flex justify-between w-full md:py-2">
          <div className="flex items-center gap-8">
            <div className="">
              <Link href="/">
                <a className="flex">
                  <Image src={tclLogo} alt="TCL Logo" width={30} height={35} />
                </a>
              </Link>
            </div>

            {!isMobileScreen && <Navigation />}
          </div>

          {!isMobileScreen && <UserNavigation />}
        </div>

        {isMobileScreen && <Burger opened={isOpen} onClick={() => setIsOpen((isOpen) => !isOpen)} color="white" />}
      </Container>
    </div>
  );
}

export default Header;
