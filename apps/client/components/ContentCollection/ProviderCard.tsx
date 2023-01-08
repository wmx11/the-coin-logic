import { Badge, Text } from '@mantine/core';
import Controls from 'components/Controls/Controls';
import { ImageWithPlaceholder } from 'components/Images/Images';
import StarRating from 'components/StarRating';
import Link from 'next/link';
import { FC } from 'react';
import routes from 'routes';
import { Provider } from 'types';
import toCurrency from 'utils/toCurrency';

type ProviderCardProps = {
  provider: Provider;
  isCarouselSlide?: boolean;
  showControls?: boolean;
};

const ProviderCard: FC<ProviderCardProps> = ({ provider, isCarouselSlide, showControls = false }) => {
  const {
    id,
    slug,
    name,
    nickname,
    backgroundImage,
    image,
    openForWork,
    displayPrices,
    priceFrom,
    priceTo,
    summary,
    views,
    followersCount,
    commentsCount,
    votesCount,
    tags,
  } = provider;

  return (
    <>
      <div>
        <Link href={`${routes.nexusBySlug.replace('${slug}', slug as string)}`}>
          <a>
            <div className="shadow-md rounded md:max-w-[320px] w-full overflow-hidden bg-white">
              <div
                className={`bg-violet h-[140px] bg-no-repeat bg-bottom bg-cover brightness-75`}
                style={{ backgroundImage: `url(${backgroundImage?.url as string})` }}
              ></div>

              <div className="flex justify-center">
                <div className="rounded-full shadow-md w-[140px] h-[140px] mt-[-95px] overflow-hidden z-10 bg-white">
                  <ImageWithPlaceholder image={image?.url as string} width={140} height={140} alt={name as string} />
                </div>
              </div>

              <div className="flex flex-col gap-4 p-2">
                <div className="text-center">
                  <Text size="lg" weight={600}>
                    {name || nickname}
                  </Text>

                  <Text size="xs" color="dimmed">
                    {tags && tags.length ? tags.map((tag) => `${tag.name} `) : null}
                  </Text>

                  <div className="flex items-center justify-center mt-2">
                    <StarRating providerId={id} rating={votesCount as number} readOnly={true} />
                  </div>
                </div>

                <div>
                  <div className="text-center">
                    {openForWork ? (
                      <Badge color="violet" className="mb-2">
                        Open for offers
                      </Badge>
                    ) : (
                      <div className="h-[30px]"></div>
                    )}
                    {displayPrices ? (
                      <Text size="xs" color="dimmed">
                        Rates from {toCurrency(priceFrom as number)} - {toCurrency(priceTo as number)}
                      </Text>
                    ) : (
                      <div className="h-[20px]"></div>
                    )}
                  </div>
                </div>

                <div>
                  <Text size="xs" color="dimmed" align="center" lineClamp={4} className="h-[75px]">
                    {summary}
                  </Text>
                </div>

                {showControls ? (
                  <div>
                    <Controls views={(views as number) || 0} size="xs" showLikes={false} />
                  </div>
                ) : null}
              </div>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default ProviderCard;
