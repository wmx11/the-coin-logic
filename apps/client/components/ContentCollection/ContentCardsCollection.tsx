import { FC } from 'react';
import { Content } from 'types';
import ContentCard from './ContentCard';

type ContentCardsCollectionProps = {
  data: Content[];
  showImage?: boolean;
  showControls?: boolean;
  baseRoute?: string;
  fallbackRoute?: string;
};

const ContentCardsCollection: FC<ContentCardsCollectionProps> = ({ data, showImage, showControls, baseRoute, fallbackRoute }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data &&
          data.map((content, index) => {
            return (
              <ContentCard
                data={content}
                key={`blog_post_${index}`}
                showImage={showImage}
                showControls={showControls}
                baseRoute={baseRoute}
                fallbackRoute={fallbackRoute}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ContentCardsCollection;
