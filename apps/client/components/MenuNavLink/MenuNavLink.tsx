import { Menu, Text, UnstyledButton } from '@mantine/core';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

type MenuNavLinkProps = {
  href?: string;
  children: string | ReactNode;
  className?: string;
  isInMenu?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
};

const MenuNavLink: FC<MenuNavLinkProps> = ({ href, icon, children, isInMenu = true, onClick, className }) => {
  const MenuLinkComponent = () => {
    if (isInMenu) {
      return (
        <Menu.Item icon={icon} color="violet" onClick={onClick}>
          <Text size="xs">{children}</Text>
        </Menu.Item>
      );
    }

    return (
      <div className={`p-2 hover:bg-violet/10 rounded-md mb-1 text-violet ${className}`} onClick={onClick}>
        <Text size="md" className="flex gap-2 items-center">
          <div className="flex-grow max-w-[20px]">{icon}</div>
          <div>{children}</div>
        </Text>
      </div>
    );
  };

  return (
    <Link href={href || '#'} passHref>
      <UnstyledButton component="a">
        <MenuLinkComponent />
      </UnstyledButton>
    </Link>
  );
};

export default MenuNavLink;
