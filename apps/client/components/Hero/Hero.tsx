import { Button, Container, Space, Title } from '@mantine/core';
import BackgroundWrapper from 'components/BackgroundWrapper';
import GradientButton from 'components/Buttons/GradientButton';
import Partners from 'components/Partners';
import GradientText from 'components/Text/GradientText';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import TextTransition, { presets } from 'react-text-transition';
import useThemeStore from 'store/useThemeStore';
import { themeConfig } from 'utils/theme';

const TEXTS = ['LOGIC', 'DATA', 'INSIGHT', 'TRACKING', 'CLARITY'];

function Hero() {
  const theme = useThemeStore((state) => state.theme);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3500);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <BackgroundWrapper>
      <div className="w-full min-h-[100vh] flex items-center relative">
        <Container>
          <div className="flex text-center fade-in">
            <div className="text-white flex-1 z-10">
              <div className="mb-16">
                <Title order={1} className="text-5xl md:text-7xl mb-10">
                  <span>Get More </span>
                  <TextTransition inline springConfig={presets.gentle} direction="up">
                    <GradientText weight={700}>{TEXTS[index % TEXTS.length]}</GradientText>
                  </TextTransition>
                  <Space h="md" />
                  For Your Crypto Projects
                </Title>
                <Title order={4}>Bringing transparency through data</Title>
              </div>

              <div className="flex gap-4 flex-wrap justify-center">
                <Link href="/pricing" passHref>
                  <Button color="violet" variant="white" size="lg" component="a" className="shadow-md">
                    Get Started
                  </Button>
                </Link>
                <Link href="/projects" passHref>
                  <GradientButton size="lg" component="a" className="shadow-md">
                    Explore Projects
                  </GradientButton>
                </Link>
              </div>
            </div>
          </div>
        </Container>
        <div className="text-white absolute bottom-0 animate-pulse flex w-full justify-center">
          <FaChevronDown />
        </div>
      </div>
      <Partners />
      <svg xmlns="http://www.w3.org/2000/svg" width="3840" height="70">
        <g>
          <path
            stroke="null"
            fill={themeConfig[theme].backgroundColor}
            d="m0,2l213.66669,9.31875c213.66669,9.49375 641.00007,27.86875 1068.33346,30.3625c427.33338,2.31875 854.66677,-11.68125 1282.00015,-11.68125c427.33338,0 854.66677,14 1068.33346,21l213.66669,7l0,14l-213.66669,0c-213.66669,0 -641.00007,0 -1068.33346,0c-427.33338,0 -854.66677,0 -1282.00015,0c-427.33338,0 -854.66677,0 -1068.33346,0l-213.66669,0l0,-70z"
            id="svg_1"
          />
        </g>
      </svg>
    </BackgroundWrapper>
  );
}

export default Hero;
