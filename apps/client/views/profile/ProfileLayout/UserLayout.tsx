import { Container, Skeleton } from '@mantine/core';
import useMobileScreen from 'hooks/useMobileScreen';
import useUser from 'hooks/useUser';
import { PropsWithChildren, useEffect } from 'react';
import useUserStore, { UserWithOrdersCount } from 'store/useUserStore';
import UserNavigation from '../ProfileNavigation';

type ProfileLayoutProps = {
  withNoMenu?: boolean;
} & PropsWithChildren;

const ProfileLayout = (props: ProfileLayoutProps) => {
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
    <Container className="py-10 min-h-screen">
      <div className="flex gap-x-8">
        {(!isMobileScreen || props.withNoMenu) && (
          <div className="w-full md:min-w-[150px] md:max-w-[200px] ">
            <UserNavigation />
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-8 mb-4 ">{props.children}</div>
        </div>
      </div>
    </Container>
  );
};

export default ProfileLayout;
