import CardinalHouse from 'public/images/cardinal_house.png';
import KCConsulting from 'public/images/kc_consulting.png';
import AssureDefi from 'public/images/assure_defi.png';
import TMG from 'public/images/tmg_logo.png';
import FluxLabs from 'public/images/flux-labs.png';
import Gauss from 'public/images/gauss.png';
import { Container, Text } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Partners = () => {
  return (
    <div>
      <Container size="md" className="py-10">
        <Text className="text-white text-center text-md mb-8 tracking-widest" weight={600}>
          Trusted By Our Partners
        </Text>
        <div className="flex gap-8 justify-between items-center flex-wrap">
          <div className="max-w-[180px] w-full">
            <Link href="https://assuredefi.com/">
              <a target="_blank">
                <Image src={AssureDefi} />
              </a>
            </Link>
          </div>
          <div className="max-w-[60px] w-full">
            <Link href="https://www.cardinalhouse.finance/">
              <a target="_blank">
                <Image src={CardinalHouse} />
              </a>
            </Link>
          </div>
          <div className="max-w-[100px] w-full">
            <Link href="https://kcconsulting.agency/">
              <a target="_blank">
                <Image src={KCConsulting} />
              </a>
            </Link>
          </div>
          <div className="max-w-[150px] w-full">
            <Link href="https://runonflux.io/fluxlabs.html">
              <a target="_blank">
                <Image src={FluxLabs} />
              </a>
            </Link>
          </div>
          <div className="max-w-[60px] w-full">
            <Link href="https://gaussgang.com/">
              <a target="_blank">
                <Image src={Gauss} />
              </a>
            </Link>
          </div>
          <div className="max-w-[60px] w-full">
            <Link href="https://kcconsulting.agency/">
              <a target="_blank">
                <Image src={TMG} />
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Partners;
