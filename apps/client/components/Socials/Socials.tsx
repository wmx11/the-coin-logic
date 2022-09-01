import Link from 'next/link';
import { FC } from 'react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

type SocialsProps = {
  size?: number;
};

export const Discord: FC<SocialsProps> = ({ size }) => {
  return (
    <Link href="https://discord.gg/mBHYuJKfEX">
      <a>
        <FaDiscord size={size || 30} />
      </a>
    </Link>
  );
};

export const Twitter: FC<SocialsProps> = ({ size }) => {
  return (
    <Link href="https://twitter.com/TheCoinLogic">
      <a>
        <FaTwitter size={size || 28} />
      </a>
    </Link>
  );
};
