import { Divider, Text, UnstyledButton } from '@mantine/core';
import MenuNavLink from 'components/MenuNavLink';
import { signOut } from 'next-auth/react';
import { FC } from 'react';
import { FaUserCog } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { MdOutlineAddChart, MdPayments } from 'react-icons/md';
import { RiFoldersLine } from 'react-icons/ri';

type UserNavigationLinksProps = {
  isInMenuProvider?: boolean;
  setIsOpen?: (type: boolean) => void;
};

const UserNavigationLinks: FC<UserNavigationLinksProps> = ({ isInMenuProvider, setIsOpen }) => {
  const onClick = setIsOpen ? () => setIsOpen(false) : () => false;
  return (
    <>
      <MenuNavLink href="/profile" icon={<FaUserCog />} isInMenu={isInMenuProvider} onClick={onClick}>
        Profile
      </MenuNavLink>

      <MenuNavLink
        href="/profile/add-project"
        icon={<MdOutlineAddChart />}
        isInMenu={isInMenuProvider}
        onClick={onClick}
      >
        Add project
      </MenuNavLink>

      <MenuNavLink href="/profile/my-projects" icon={<RiFoldersLine />} isInMenu={isInMenuProvider} onClick={onClick}>
        My projects
      </MenuNavLink>

      <MenuNavLink href="/profile/payments" icon={<MdPayments />} isInMenu={isInMenuProvider} onClick={onClick}>
        Payments
      </MenuNavLink>

      <Divider className="my-2" />

      <MenuNavLink
        icon={<FiLogOut />}
        isInMenu={isInMenuProvider}
        onClick={() => signOut({ redirect: true, callbackUrl: '/' })}
      >
        <Text size="xs">Log Out</Text>
      </MenuNavLink>
    </>
  );
};

export default UserNavigationLinks;
