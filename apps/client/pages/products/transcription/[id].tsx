import { Container, Loader } from '@mantine/core';
import axios from 'axios';
import { SmallBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrapper';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Robot from 'public/images/robot.svg';
import { FC, useEffect, useState } from 'react';
import routes from 'routes';
import useSWR from 'swr';

type TranscriptionIdPageProps = {
  transcriptionId: string;
  id: string;
};

const TranscriptionIdPage: FC<TranscriptionIdPageProps> = ({ transcriptionId, id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const getResults = async () => {
    const {
      data: { data },
    } = await axios.post(`${routes.api.transcribe.check}?id=${id}`, {
      transcript_id: transcriptionId,
    });

    return { ...data };
  };
  const { data } = useSWR('/api/check', getResults, { refreshInterval: 1 * 60 * 1000 });

  useEffect(() => {
    if (!data) {
      return;
    }

    if (data.redirect) {
      router.push(routes.transcription.replace('${slug}', data.redirect));
    }
  }, [data]);

  return (
    <>
      <SmallBackgroundWrapper>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            🔥
            <GradientTitle>We are working on it</GradientTitle>
            🔥
          </div>
        </div>
      </SmallBackgroundWrapper>
      <Container className="py-10">
        {isLoading ? (
          <div className="flex flex-col items-center gap-4">
            <Loader color="violet" size={50} variant="dots" />
            <GradientText>
              We are currently generating your transcription. Come back in a little while to check the results.
            </GradientText>
            <Image src={Robot} width={500} />
          </div>
        ) : null}
      </Container>
    </>
  );
};

export default TranscriptionIdPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res, params }) => {
  const data = await prisma?.transcription.findUnique({
    where: { id: params?.id as string },
    select: { transcriptionId: true },
  });

  return {
    props: {
      id: params?.id || '',
      transcriptionId: data?.transcriptionId || '',
    },
  };
};
