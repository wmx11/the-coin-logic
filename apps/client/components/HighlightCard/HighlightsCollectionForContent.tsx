import React, { FC } from 'react';
import TrendingProjectsHighlights from './TrendingProjectsHighlights';
import { TrendingHighlights } from 'types/Project';

const HighlightsCollectionForContent: FC<TrendingHighlights> = ({ trendingHighlights }) => {
  return (
    <div>
      <TrendingProjectsHighlights trendingHighlights={trendingHighlights} />
    </div>
  );
};

export default HighlightsCollectionForContent;
