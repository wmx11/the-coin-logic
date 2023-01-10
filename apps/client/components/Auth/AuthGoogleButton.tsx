import { Button } from '@mantine/core';
import { QUERY_CALLBACK } from 'constants/general';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';
import routes from 'routes';
import { Icons } from 'utils/icons';

type AuthGoogleButtonProps = PropsWithChildren;

const AuthGoogleButton: FC<AuthGoogleButtonProps> = ({ children }) => {
  const router = useRouter();
  const callbackQuery = router.query[QUERY_CALLBACK];
  const callbackUrl = callbackQuery ? `${routes.authCheck}?${QUERY_CALLBACK}=${callbackQuery}` : routes.authCheck;

  return (
    <Button
      variant="outline"
      color="violet"
      size="md"
      leftIcon={<Icons.Google />}
      onClick={() => signIn('google', { callbackUrl })}
    >
      {children ? children : 'Continue with Google'}
    </Button>
  );
};

export default AuthGoogleButton;
