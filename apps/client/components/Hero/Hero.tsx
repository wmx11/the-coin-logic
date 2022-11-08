import { Button, Container, Space, Text, Title } from '@mantine/core';
import Partners from 'components/Partners';
import GradientText from 'components/Text/GradientText';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['LOGIC', 'DATA', 'INSIGHT', 'TRACKING', 'TRANSPARENCY'];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3500);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="bg-[url('../public/images/waves.svg')] bg-lightBlue bg-no-repeat bg-bottom bg-cover relative overflow-hidden">
      <div className="w-full min-h-[100vh] flex items-center relative">
        <Container>
          <div className="flex text-center fade-in">
            <div className="text-white flex-1 z-10">
              <div className="mb-8">
                <Title order={1} className="text-5xl md:text-7xl mb-10">
                  <span>Get More </span>
                  <TextTransition inline springConfig={presets.gentle}>
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
                  <Button
                    color="violet"
                    variant="gradient"
                    gradient={{ from: 'violet', to: 'grape' }}
                    size="lg"
                    component="a"
                    className="shadow-md"
                  >
                    Explore Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
        <div className="text-white absolute bottom-24 animate-pulse flex w-full justify-center">
          <FaChevronDown />
        </div>
      </div>
      <Partners />
      <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="70">
        <path
          stroke="null"
          id="svg_1"
          d="m0,2l106.72223,9.31875c106.72223,9.49375 320.16669,27.86875 533.61115,30.3625c213.44446,2.31875 426.88892,-11.68125 640.33338,-11.68125c213.44446,0 426.88892,14 533.61115,21l106.72223,7l0,14l-106.72223,0c-106.72223,0 -320.16669,0 -533.61115,0c-213.44446,0 -426.88892,0 -640.33338,0c-213.44446,0 -426.88892,0 -533.61115,0l-106.72223,0l0,-70z"
          fill="#fff"
        />
      </svg>
    </div>
  );
}

export default Hero;
