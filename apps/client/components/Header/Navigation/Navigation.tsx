import useMobileScreen from 'hooks/useMobileScreen';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import tclLogo from '../../../public/images/tcl_logo.png';
import UserNavigation from '../UserNavigation';

type NavLinkProps = {
  href: string;
  label: string;
};

const Navigation = () => {
  const { isMobileScreen } = useMobileScreen();

  const NavLink: FC<NavLinkProps> = ({ href, label }) => {
    return (
      <div className="w-full md:w-auto">
        <Link href={href}>
          <a className={`font-bold hover:underline ${isMobileScreen && 'w-full p-4 block mb-2 bg-violet rounded-md'}`}>
            {label}
          </a>
        </Link>
      </div>
    );
  };

  return (
    <div className={`flex justify-between text-white py-4 ${isMobileScreen && 'flex-col items-center'}`}>
      <div className={`flex gap-x-8 items-center ${isMobileScreen && 'flex-col mb-8 text-center w-full'} `}>
        <div className="">
          <Link href="/">
            <a className="flex">
              <Image src={tclLogo} alt="TCL Logo" width={30} height={35} placeholder="blur" />
            </a>
          </Link>
        </div>
        <NavLink href="" label="Products" />
        <NavLink href="" label="Resources" />
        <NavLink href="/about-us" label="About Us" />
        <NavLink href="/roadmap" label="Roadmap" />
        <NavLink href="/pricing" label="Pricing" />
      </div>

      <UserNavigation />
    </div>
  );
};

export default Navigation;
