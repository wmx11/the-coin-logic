import { Button, Container, Text, Title } from '@mantine/core';
import SmallHero from 'components/SmallHero';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CardinalHouse from 'public/images/cardinal_house.jpg';
import KCConsulting from 'public/images/kc_consulting.jpg';
import { FC } from 'react';
import { ContentProps } from 'types/TextContent';

const index: FC<ContentProps> = ({ content }) => {
  const router = useRouter();

  return (
    <>
      <SmallHero>
        <Title order={1} className="text-5xl mb-4">
          Changing DeFi One Partner at a Time
        </Title>
        <Title order={4} className="mb-4">
          Explore our partners and the benefits they bring!
        </Title>
        <Button variant="white" color="violet" onClick={() => router.push('/contact-us')}>
          Contact Us
        </Button>
      </SmallHero>

      <Container className="py-10">
        <Title order={1} className="text-5xl mb-4" align="center">
          Our Partners
        </Title>
        <Text size="sm" color="dimmed" align="center" className="mb-16">
          Read more about our partners and how they could help your project succeed!
        </Text>

        <div className="flex gap-16 items-center justify-center flex-wrap">
          <div className="max-w-[120px] w-full rounded-md relative group p-2 flex items-center">
            <Image src={CardinalHouse} />
            <Link href="/text-content/cardinal-house">
              <a>
                <div className="bg-violet text-white absolute inset-0 justify-center items-center flex opacity-0 group-hover:opacity-90 transition-all rounded-md shadow-md">
                  Read more
                </div>
              </a>
            </Link>
          </div>
          <div className="max-w-[200px] w-full rounded-md relative group p-2 flex items-center">
            <Image src={KCConsulting} />
            <Link href="/text-content/kc-consulting">
              <a>
                <div className="bg-violet text-white absolute inset-0 justify-center items-center flex opacity-0 group-hover:opacity-90 transition-all rounded-md shadow-md">
                  Read more
                </div>
              </a>
            </Link>
          </div>
          <div className="rounded-md relative group p-2 flex items-center">
            <Title order={1}>schedule.me</Title>
            <Link href="/text-content/schedule-me">
              <a>
                <div className="bg-violet text-white absolute inset-0 justify-center items-center flex opacity-0 group-hover:opacity-90 transition-all rounded-md shadow-md">
                  Read more
                </div>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default index;
