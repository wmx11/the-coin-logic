import { Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
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
    <Paper className='md:max-w-[310px] w-full'>
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-between items-center">
            <GradientText weight={700} size="lg" className="flex items-center gap-2">
              <div className="text-violet">{icon}</div> {title}
            </GradientText>
          </div>
          <div className="pt-4 ml-4">{children}</div>
        </div>
        <Link href={(moreLink as string) || ''} passHref>
          <GradientButton size="xs" component="a" rightIcon={<Icons.ChevronRight />}>
            View More
          </GradientButton>
        </Link>
      </div>
    </Paper>
  );
};

export default HighlightCard;
