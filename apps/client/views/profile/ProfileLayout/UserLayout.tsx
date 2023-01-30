import { Container, Skeleton } from '@mantine/core';
import useMobileScreen from 'hooks/useMobileScreen';
import useUser from 'hooks/useUser';
import { PropsWithChildren, useEffect } from 'react';
import useUserStore, { UserWithOrdersCount } from 'store/useUserStore';
import UserNavigation from '../ProfileNavigation';
import useThemeStore from 'store/useThemeStore';

type ProfileLayoutProps = {
  withNoMenu?: boolean;
} & PropsWithChildren;

const ProfileLayout = (props: ProfileLayoutProps) => {
  const theme = useThemeStore((state) => state.theme);
  const { user, status } = useUser();
  const { isMobileScreen } = useMobileScreen();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    setUser(user as UserWithOrdersCount);
  }, [user]);

  if (status === 'loading') {
    return (
      <Container className="py-10 min-h-screen">
        <Skeleton />
      </Container>
    );
  }

  return (
    <Container className="min-h-screen" size="xl">
      <div className="flex">
        {(!isMobileScreen || props.withNoMenu) && (
          <div className="w-full md:min-w-[150px] md:max-w-[200px] py-10 pr-2">
            <UserNavigation />
          </div>
        )}
        <div className={`flex-1  border-x ${theme === 'light' ? '' : 'border-x-zinc-800'} p-10`}>
          <div className="flex flex-1 items-start justify-between gap-8 mb-4 ">{props.children}</div>
        </div>
      </div>
    </Container>
  );
};

export default ProfileLayout;
