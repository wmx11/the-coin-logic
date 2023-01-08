import { Container, Loader, Text } from '@mantine/core';
import GrayBox from 'components/GrayBox';
import { SESSION_TOKEN } from 'constants/general';
import useLocalStorage from 'hooks/useLocalStorage';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Icons } from 'utils/icons';
import { tokens } from 'utils/tokens/tokens';

const index = () => {
  const { data: session, status } = useSession();
  const [storedValue, setValue] = useLocalStorage(SESSION_TOKEN, session?.token);
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated' && !storedValue) {
      (async () => {
        const token = await tokens.verify<{ accessToken: string }>(
          session?.token as string,
          process.env.NEXT_PUBLIC_SIGNED_SECRET || '',
        );
        setValue(token?.accessToken || '');
        router.push('/');
      })();
    }
    if (storedValue) {
      router.push('/');
    }
  }, [status]);

  return (
    <Container className="min-h-screen py-10">
      <GrayBox>
        {storedValue ? (
          <div className="text-violet">
            <Icons.Check />
          </div>
        ) : (
          <Loader color="violet" />
        )}

        {storedValue ? (
          <Text>Redirecting.</Text>
        ) : (
          <div className="text-center">
            <Text>Verifying your credentials...</Text>
            <Text size="sm" color="dimmed">
              If it's taking too long, try to log out and log in again. If the issue persists, contact the support.
            </Text>
          </div>
        )}
      </GrayBox>
    </Container>
  );
};

export default index;
