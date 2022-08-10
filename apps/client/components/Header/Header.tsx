import { Container, Burger, Drawer } from '@mantine/core';
import useMobileScreen from 'hooks/useMobileScreen';
import React, { useState } from 'react';
import Navigation from './Navigation';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobileScreen } = useMobileScreen();

  return (
    <div className="bg-lightBlue">
      <Container className={`${isMobileScreen && 'flex items-center justify-end py-4'}`}>
        <Drawer
          opened={isOpen}
          onClose={() => setIsOpen(false)}
          overlayOpacity={0.55}
          overlayBlur={3}
          size="lg"
          padding="xl"
          position="right"
          withinPortal={false}
        >
          <Navigation />
        </Drawer>
        {!isMobileScreen && <Navigation />}
        {isMobileScreen && <Burger opened={isOpen} onClick={() => setIsOpen((isOpen) => !isOpen)} color="white" />}
      </Container>
    </div>
  );
}

export default Header;
