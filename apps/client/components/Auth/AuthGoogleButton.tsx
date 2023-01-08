import { Button } from '@mantine/core';
import { signIn } from 'next-auth/react';
import { FC, PropsWithChildren } from 'react';
import routes from 'routes';
import { Icons } from 'utils/icons';

type AuthGoogleButtonProps = PropsWithChildren;

const AuthGoogleButton: FC<AuthGoogleButtonProps> = ({ children }) => {
  return (
    <Button
      variant="outline"
      color="violet"
      size="md"
      leftIcon={<Icons.Google />}
      onClick={() => signIn('google', { callbackUrl: routes.authCheck })}
    >
      {children ? children : 'Continue with Google'}
    </Button>
  );
};

export default AuthGoogleButton;
