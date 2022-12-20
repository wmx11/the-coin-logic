import { Divider, Text } from '@mantine/core';
import MenuNavLink from 'components/MenuNavLink';
import { SESSION_TOKEN } from 'constants/general';
import useLocalStorage from 'hooks/useLocalStorage';
import { signOut } from 'next-auth/react';
import { FC } from 'react';
import { FaUserCog } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { MdOutlineAddChart, MdTrackChanges } from 'react-icons/md';
import { RiFoldersLine } from 'react-icons/ri';
import routes from 'routes';

type UserNavigationLinksProps = {
  isInMenuProvider?: boolean;
  setIsOpen?: (type: boolean) => void;
};

const UserNavigationLinks: FC<UserNavigationLinksProps> = ({ isInMenuProvider, setIsOpen }) => {
  const onClick = setIsOpen ? () => setIsOpen(false) : () => false;
  const [storedValue, setValue] = useLocalStorage(SESSION_TOKEN, '');

  return (
    <>
      <MenuNavLink href={routes.profile} icon={<FaUserCog />} isInMenu={isInMenuProvider} onClick={onClick}>
        Profile
      </MenuNavLink>

      <MenuNavLink href={routes.addProject} icon={<MdOutlineAddChart />} isInMenu={isInMenuProvider} onClick={onClick}>
        Add project
      </MenuNavLink>

      <MenuNavLink href={routes.myProjects} icon={<RiFoldersLine />} isInMenu={isInMenuProvider} onClick={onClick}>
        My projects
      </MenuNavLink>

      <MenuNavLink
        href={routes.marketingTracker}
        icon={<MdTrackChanges />}
        isInMenu={isInMenuProvider}
        onClick={onClick}
      >
        Marketing Tracker
      </MenuNavLink>

      {/* @TODO - Return this with proper invoices generated from Orders */}
      {/* 
      <MenuNavLink href="/profile/payments" icon={<MdPayments />} isInMenu={isInMenuProvider} onClick={onClick}>
        Invoices
      </MenuNavLink> */}

      <Divider className="my-2" />

      <MenuNavLink
        icon={<FiLogOut />}
        isInMenu={isInMenuProvider}
        onClick={() => {
          setValue('');
          signOut({ redirect: true, callbackUrl: '/' });
        }}
      >
        <Text size="xs">Log Out</Text>
      </MenuNavLink>
    </>
  );
};

export default UserNavigationLinks;
