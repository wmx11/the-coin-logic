import CardinalHouse from 'public/images/cardinal_house.png';
import KCConsulting from 'public/images/kc_consulting.jpg';
import TMG from 'public/images/tmg_logo.png';
import FluxLabs from 'public/images/flux-labs.png';
import { Container, Text } from '@mantine/core';
import React from 'react';
import Image from 'next/image';

const Partners = () => {
  return (
    <div>
      <Container size="sm" className="py-10">
        <Text className="text-white text-center text-md mb-4 tracking-widest" weight={600}>
          Trusted By Our Partners
        </Text>
        <div className="flex gap-8 justify-between items-center flex-wrap">
          <div className="max-w-[60px] w-full">
            <Image src={CardinalHouse} />
          </div>
          <div className="max-w-[150px] w-full">
            <Image src={KCConsulting} />
          </div>
          <div className="max-w-[150px] w-full">
            <Image src={FluxLabs} />
          </div>
          <div className="max-w-[60px] w-full">
            <Image src={TMG} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Partners;
