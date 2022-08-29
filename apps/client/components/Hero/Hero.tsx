import { Button, Container, Paper, Space, Text, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import marketStatsImage from 'public/images/data_animation_2.json';
import Lottie from 'lottie-react';
import Link from 'next/link';
import useMobileScreen from 'hooks/useMobileScreen';

function Hero() {
  const { isMobileScreen } = useMobileScreen();
  return (
    <div className="bg-[url('../public/images/wave4.svg')] bg-no-repeat bg-cover bg-bottom w-full min-h-screen py-10 flex items-center relative">
      <Container>
        <div className="flex justify-between items-center gap-8 flex-wrap">
          <div className="text-white flex-1 z-10">
            <Title order={1} className="text-5xl md:text-7xl mb-8">
              Track your project vitals.
              <Space h="xl" />
              Make your community happy.
            </Title>
            <Title order={4}>Transparency Through Data</Title>
          </div>

          <div className="relative z-10 w-full md:min-w-[320px] md:max-w-[590px]">
            <div className="bg-darkBlue/60 backdrop-blur-md text-white p-10 rounded-md">
              <Text weight={700} size="xl" className="text-3xl mb-4">
                LOG-X
              </Text>
              <Text className="mb-8">
                Actively monitor your on-chain applications in realt time. Present transparent, comprehensive data
                insights with historical data to your community. Get access to personalized KPIs, marketing, sentiment
                analysis, bots, and more.
              </Text>
              <Link href="/pricing" passHref>
                <Button color="violet" size="md" component="a">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>

          {!isMobileScreen && (
            <div className="absolute bottom-[-25px] right-0 z-[0] max-w-[700px]">
              <Lottie animationData={marketStatsImage} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Hero;
