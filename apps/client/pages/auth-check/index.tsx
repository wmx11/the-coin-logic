import { Container, Loader, Text } from '@mantine/core';
import GrayBox from 'components/GrayBox';
import { Discord } from 'components/Socials/Socials';
import { QUERY_CALLBACK, QUERY_CALLBACK_ERROR, QUERY_CALLBACK_SUCCESS, SESSION_TOKEN } from 'constants/general';
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
  const callbackQuery = router.query[QUERY_CALLBACK];
  const callbackErrorQuery = router.query[QUERY_CALLBACK_ERROR];
  const callbackSuccessQuery = router.query[QUERY_CALLBACK_SUCCESS];

  useEffect(() => {
    if (callbackSuccessQuery) {
      return;
    }

    if (callbackErrorQuery) {
      return;
    }

    if (!session?.isVerified) {
      return;
    }

    if (status === 'authenticated' && !storedValue) {
      (async () => {
        const token = await tokens.verify<{ accessToken: string }>(
          session?.token as string,
          process.env.NEXT_PUBLIC_SIGNED_SECRET || '',
        );
        setValue(token?.accessToken || '');
        router.push(callbackQuery ? (callbackQuery as string) : '/');
      })();
    }

    if (status === 'authenticated' && storedValue) {
      router.push(callbackQuery ? (callbackQuery as string) : '/');
    }
  }, [callbackErrorQuery, callbackSuccessQuery, status, session]);

  return (
    <Container className="min-h-screen py-10">
      <GrayBox>
        {callbackSuccessQuery || callbackErrorQuery || !session?.isVerified ? (
          <>
            <div className="flex flex-col items-center gap-4">
              <div className="text-violet">{callbackSuccessQuery ? <Icons.Check /> : <Icons.Cross />}</div>
              <Text color={callbackSuccessQuery ? 'green' : 'red'}>
                {callbackSuccessQuery || callbackErrorQuery
                  ? callbackSuccessQuery || callbackErrorQuery
                  : 'Your email address is not verified. Please check your email for a verification link. (Including "Others", "Spam", "Trash" folders.)'}
              </Text>
              <Text size="sm" color="dimmed">
                If you are repeatedly experiencing the same issue, please contact our support team{' '}
              </Text>
              <Discord type="button" label="Open a ticket on Discord" />
            </div>
          </>
        ) : (
          <>
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
              <div className="flex flex-col items-center gap-4">
                <Text>Verifying your credentials...</Text>
                <Text size="sm" color="dimmed">
                  If it's taking too long, try to log out and log in again. If the issue persists, contact the support.
                </Text>
                <Discord type="button" label="Open a ticket on Discord" />
              </div>
            )}
          </>
        )}
      </GrayBox>
    </Container>
  );
};

export default index;
