import { Menu } from '@mantine/core';
import UserAvatar from 'components/UserAvatar';
import UserNavigationLinks from 'components/UserNavigationLinks';
import useMobileScreen from 'hooks/useMobileScreen';
import { Session } from 'next-auth';
import { FC } from 'react';

type AuhenticatedNavigationProps = {
  session: Session;
  setIsOpen?: (type: boolean) => void;
};

const AuhenticatedNavigation: FC<AuhenticatedNavigationProps> = ({ session, setIsOpen }) => {
  const { isMobileScreen } = useMobileScreen();
  const userName = session?.user?.name;

  const MenuComponent = () => {
    if (isMobileScreen) {
      return (
        <>
          <div className="flex mb-4">
            <UserAvatar name={userName as string} />
          </div>
          <UserNavigationLinks isInMenuProvider={false} setIsOpen={setIsOpen} />
        </>
      );
    }

    return (
      <Menu shadow="md" trigger="hover">
        <Menu.Target>
          <div>
            <UserAvatar name={userName as string} />
          </div>
        </Menu.Target>
        <Menu.Dropdown>
        <Menu.Label>{userName}</Menu.Label>
          <UserNavigationLinks />
        </Menu.Dropdown>
      </Menu>
    );
  };

  return (
    <div className="flex md:gap-4 md:items-center flex-col md:flex-row w-full md:w-auto">
      <MenuComponent />
    </div>
  );
};

export default AuhenticatedNavigation;
