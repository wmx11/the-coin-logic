import { Button, Container, Text, Title } from '@mantine/core';
import AddYourProject from 'components/AddYourProject';
import BackgroundWrapper from 'components/BackgroundWrapper';
import { SmallBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrapper';
import GradientButton from 'components/Buttons/GradientButton';
import Meta from 'components/Meta';
import SubscribeToEmail from 'components/SubscribeToEmail';
import GradientTitle from 'components/Text/GradientTitle';
import { PER_PAGE } from 'constants/general';
import { getTranscriptions } from 'data/getters/transcriptions';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import routes from 'routes';
import { Transcription } from 'types';
import { Icons } from 'utils/icons';
import { productsServices } from 'utils/products';
import toCurrency from 'utils/toCurrency';
import Transcriptions from 'views/transcription/Transcriptions';

type TranscriptionsPageProps = {
  data: Transcription[];
  count: number;
};

const TranscriptionsPage: FC<TranscriptionsPageProps> = ({ data, count }) => {
  return (
    <>
      <Meta
        title="Crypto & DeFi AMA transcripts and summaries | Coin Logic"
        description="Transcribe and summarize crypto & DeFi project AMAs with AI. Browse through dozens of already prepared AMA, meeting, and community updates on TheCoinLogic."
      />
      <div>
        <BackgroundWrapper className="min-h-screen flex items-center">
          <Container size="md">
            <div className="text-center mb-16">
              <Title className="text-white text-6xl mb-8">
                Convert your audio and video files to text, and information-packed summaries
              </Title>
              <Text className="text-white">
                Automatically convert your project AMAs, meetings, and conferences to text using The Coin Logic AI
                solution. Summarize, and extract key points, topics, and lists. Save time and resources for your
                community.
              </Text>
              <Text className="text-white">Browse through dozens of other transcripts!</Text>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href={routes.transcriptionCreate} passHref>
                <Button
                  color="violet"
                  variant="white"
                  size="lg"
                  component="a"
                  className="shadow-md"
                  leftIcon={<Icons.Text />}
                >
                  Transcribe
                </Button>
              </Link>
              <Link href={routes.pricing} passHref>
                <GradientButton size="lg" component="a" className="shadow-md">
                  Explore Products
                </GradientButton>
              </Link>
            </div>
          </Container>
        </BackgroundWrapper>
        <SmallBackgroundWrapper>
          <div className="text-center">
            <GradientTitle>Simple Pricing</GradientTitle>
            <Text size="sm" color="dimmed">
              Fund your account using cryptocurrency stablecoins to use our transcription services.
            </Text>
          </div>
        </SmallBackgroundWrapper>
        <section>
          <Container size="sm" className="py-24 text-center">
            <div className="mb-16">
              <GradientTitle order={2}>
                Cost per 1 second of audio: ~{toCurrency(productsServices.transcription.audioTokens)}
              </GradientTitle>
              <Text size="sm" color="dimmed">
                TCL Transcription AI charges around {toCurrency(productsServices.transcription.audioTokens)} for every
                second of audio it transcribes. Not only do we transcribe your audio files but also detect speakers,
                timestamps, summarize the content and give you a TL;DR.
              </Text>
            </div>
            <div className="mb-16">
              <GradientTitle order={2}>
                Cost per word: ~{toCurrency(productsServices.transcription.textTokens)}
              </GradientTitle>
              <Text size="sm" color="dimmed">
                Once the transcription is done we will generate a title, a secondary summary, and some key points based
                on the text. TCL Transcription AI charges around {toCurrency(productsServices.transcription.textTokens)}{' '}
                per word.
              </Text>
            </div>
            <div>
              <GradientTitle order={2}>
                ~
                {toCurrency(
                  productsServices.transcription.textTokens * productsServices.transcription.approxWordsInMinute +
                    productsServices.transcription.audioTokens * productsServices.transcription.minuteVideoDuration,
                )}{' '}
                for a 1 minute video/audio
              </GradientTitle>
              <Text size="sm" color="dimmed">
                This is how much it would cost to transcribe a 1 minute video with 200 words on average.
              </Text>
              <Text size="sm" color="dimmed">
                ~
                {toCurrency(
                  productsServices.transcription.textTokens * 4000 + productsServices.transcription.audioTokens * 3600,
                )}{' '}
                is the approximate price of a 1 hour video / audio.
              </Text>
            </div>
          </Container>
        </section>
        <SmallBackgroundWrapper>
          <div className="text-center">
            <GradientTitle>Recent Transcriptions</GradientTitle>
            <Text size="sm" color="dimmed">
              Stay Up-to-Date on the Latest Cryptocurrency Insights with Our Transcriptions
            </Text>
          </div>
        </SmallBackgroundWrapper>
        <section>
          <Container className="py-10">
            <Transcriptions data={data} count={count} />
          </Container>
        </section>
        <section>
          <SubscribeToEmail />
        </section>
        <section>
          <AddYourProject />
        </section>
      </div>
    </>
  );
};

export default TranscriptionsPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const [data, count] = await getTranscriptions({ take: PER_PAGE });

  return {
    props: {
      data,
      count,
    },
  };
};
