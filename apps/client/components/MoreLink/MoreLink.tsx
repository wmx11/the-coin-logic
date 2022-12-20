import GradientText from 'components/Text/GradientText';
import Link from 'next/link';
import React, { FC } from 'react';
import { Icons } from 'utils/icons';

type MoreLinkProps = {
  href: string;
};

const MoreLink: FC<MoreLinkProps> = ({ href }) => {
  return (
    <Link href={href}>
      <a className="hover:opacity-80">
        <GradientText size="sm" className="flex gap-1 items-center">
          More <span className="text-xs mt-1 text-violet">{<Icons.ChevronRight />}</span>
        </GradientText>
      </a>
    </Link>
  );
};

export default MoreLink;
