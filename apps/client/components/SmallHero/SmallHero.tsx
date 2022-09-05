import { Container } from '@mantine/core';
import React, { FC, PropsWithChildren } from 'react';

const SmallHero: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-[url('../public/images/small_hero_wave.svg')] bg-no-repeat bg-cover bg-center">
      <Container className="py-10 min-h-[50vh] flex flex-col items-center justify-center text-white">
        {children}
      </Container>
    </div>
  );
};

export default SmallHero;
