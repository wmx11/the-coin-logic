import { Badges } from 'components/Badges';
import GradientButton from 'components/Buttons/GradientButton';
import { ImageWithPlaceholder } from 'components/Images/Images';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import { Trend } from 'components/Trend';
import { FC } from 'react';
import { MarketStat, Project, Tag } from 'types';
import { Icons } from 'utils/icons';
import toCurrency from 'utils/toCurrency';

type HeaderProps = {
  project: Project;
  data: MarketStat;
};

const Header: FC<HeaderProps> = ({ project, data }) => {
  return (
    <div>
      <div
        className={`bg-violet h-[300px] bg-no-repeat bg-center bg-cover rounded-md overflow-hidden`}
        style={{ backgroundImage: `url(${project?.backgroundImage?.url as string})` }}
      ></div>
      <div className="rounded-full shadow-md w-[140px] h-[140px] mt-[-75px] mb-2 ml-4 overflow-hidden z-10 border-4 border-white bg-white relative">
        <ImageWithPlaceholder
          image={project?.logo ? (project?.logo?.url as string) : ''}
          width={140}
          height={140}
          alt={project?.name as string}
        />
      </div>

      <div className="mb-2 flex justify-between flex-col md:flex-row">
        <div>
          <GradientTitle className="mb-2">{project?.name}</GradientTitle>
          <div className="flex gap-2 w-full md:w-auto mb-4">
            {project?.website ? (
              <GradientButton
                component="a"
                href={project?.website as string}
                target="_blank"
                rightIcon={<Icons.ExternalLink />}
              >
                Website
              </GradientButton>
            ) : null}
            {project?.whitepaper ? (
              <GradientButton
                component="a"
                href={project?.whitepaper as string}
                target="_blank"
                rightIcon={<Icons.ExternalLink />}
              >
                Whitepaper
              </GradientButton>
            ) : null}
          </div>
          <div>
            <GradientText weight={700} size="lg" className="mb-2">
              Tags:
            </GradientText>
            <Badges isLimited={false} badges={project.tags as Tag[]} />
          </div>
        </div>

        <div>
          {project?.trackPrice && data.price ? (
            <div className="mb-4">
              <GradientText weight={600} size="lg">
                Price
              </GradientText>
              <GradientText weight={700} className="text-3xl">
                {toCurrency((data.price as number) || 0)}
              </GradientText>
              <Trend
                previousValue={{
                  change: data?.priceChange24 || 0,
                  percentage: data?.priceChange24Percentage as number,
                }}
                inline={true}
              />
            </div>
          ) : null}
          {project?.trackMarketCap && data.marketCap ? (
            <div className="mb-4">
              <GradientText weight={600} size="lg">
                Market Cap
              </GradientText>
              <GradientText weight={700} className="text-3xl">
                {toCurrency((data.marketCap as number) || 0)}
              </GradientText>
              <Trend
                previousValue={{
                  change: data?.marketCapChange24 || 0,
                  percentage: data?.marketCapChange24Percentage as number,
                }}
                inline={true}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
