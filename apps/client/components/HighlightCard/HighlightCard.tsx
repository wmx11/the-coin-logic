import { Text } from '@mantine/core';
import Paper from 'components/Paper';
import GradientText from 'components/Text/GradientText';
import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';
import { Icons } from 'utils/icons';

type HighlightCardItemProps = {
  index?: number;
  content: React.ReactElement | string;
};

export const HighlightCardItem: FC<HighlightCardItemProps> = ({ index, content }) => {
  return (
    <div className="mb-4 flex items-center gap-2">
      <Text size="xs" color="dimmed" className="mt-1">
        {index}.
      </Text>
      <div className="text-sm w-full">{content}</div>
    </div>
  );
};

type HighlightCardProps = {
  icon?: React.ReactElement;
  title: string;
  moreLink?: string;
} & PropsWithChildren;

const HighlightCard: FC<HighlightCardProps> = ({ icon, title, children, moreLink }) => {
  return (
    <Paper>
      <div className="flex justify-between items-center">
        <GradientText weight={700} size="lg" className="flex items-center gap-2">
          <div className="text-violet">{icon}</div> {title}
        </GradientText>
        <Link href={(moreLink as string) || ''}>
          <a className="flex items-center gap-2 text-violet hover:opacity-80">
            <div className="text-sm">More</div>
            <div className="text-xs mt-1">
              <Icons.ChevronRight />
            </div>
          </a>
        </Link>
      </div>
      <div className="pt-4 ml-4">{children}</div>
    </Paper>
  );
};

export default HighlightCard;
