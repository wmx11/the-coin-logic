import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import React, { FC } from 'react';
import { capitalize } from 'utils/utils';
import { ClipboardButton } from 'components/ClipboardButton';

type SocialShareProps = {
  url: string;
  title: string;
  hashtag: string;
  size?: number;
};

const SocialShare: FC<SocialShareProps> = ({ url, title, hashtag, size }) => {
  const parsedHashtag = hashtag
    .split('-')
    .map((split) => capitalize(split))
    .join('');

  return (
    <div className="flex gap-2 flex-wrap items-center">
      <FacebookShareButton url={url} quote={title} hashtag={parsedHashtag}>
        <FacebookIcon round={true} size={size || 25} />
      </FacebookShareButton>
      <RedditShareButton url={url} title={title}>
        <RedditIcon round={true} size={size || 25} />
      </RedditShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon round={true} size={size || 25} />
      </TelegramShareButton>
      <TwitterShareButton url={url} title={title} hashtags={[parsedHashtag]}>
        <TwitterIcon round={true} size={size || 25} />
      </TwitterShareButton>
      <ClipboardButton copy={url} title="Copy Link" />
    </div>
  );
};

export default SocialShare;
