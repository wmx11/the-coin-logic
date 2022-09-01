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
    <div className="bg-lightBlue sticky top-0 z-20 bg-[url('../public/images/wave.svg')] bg-no-repeat bg-cover bg-bottom w-full">
      <Container className={`${isMobileScreen && 'flex items-center justify-end py-4 w-full'}`}>
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
          >
            <Navigation setIsOpen={setIsOpen} />
            <UserNavigation setIsOpen={setIsOpen} />
          </Drawer>
        )}

        <div className="flex justify-between w-full md:py-4">
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
