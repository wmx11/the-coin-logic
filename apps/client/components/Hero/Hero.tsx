import { Button, Container, Space, Text, Title } from '@mantine/core';
import useMobileScreen from 'hooks/useMobileScreen';
import Lottie from 'lottie-react';
import Link from 'next/link';
import marketStatsImage from 'public/images/data_animation_4.json';

function Hero() {
  const { isMobileScreen } = useMobileScreen();
  return (
    <div className="bg-[url('../public/images/wave.svg')] bg-no-repeat bg-cover bg-bottom w-full min-h-screen py-10 flex items-center relative">
      <Container>
        <div className="flex justify-between items-center gap-8 flex-wrap">
          <div className="text-white flex-1 z-10">
            <Title order={1} className="text-5xl md:text-7xl mb-8">
              Stay in the loop.
              <Space h="xl" />
              Monitor your DeFi journey.
            </Title>
            <Title order={3}>Transparency Through Data</Title>
          </div>

          <div className="relative z-10 w-full md:min-w-[320px] md:max-w-[590px]">
            <div className="bg-darkBlue/60 backdrop-blur-md text-white p-10 rounded-md">
              <Text weight={700} size="xl" className="text-4xl mb-4">
                COIN LOGIC
              </Text>
              <Text className="mb-8">
                Active, transparent real-time data monitoring, and tracking for your DeFi and cryptocurrency projects.
                Track general market data, custom data such as treasury, insurance, utility wallets. Track the number of
                holders from your specified token amount and see how it changes over time. Become transparent through
                data and leverage analytics to make better decisions!
              </Text>
              <Link href="/pricing" passHref>
                <Button color="violet" size="md" component="a">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>

          {!isMobileScreen && (
            <div className="absolute bottom-[-25px] right-0 z-[0] max-w-[950px]">
              <Lottie animationData={marketStatsImage} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Hero;
