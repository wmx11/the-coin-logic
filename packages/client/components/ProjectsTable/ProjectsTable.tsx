import React, { FC } from 'react';
import { Button, Center, Container, Paper, Space, Text, Title } from '@mantine/core';
import { MarketDataWithChangeAndProjectTypes } from '../../types/MarketData';
import toCurrency from '../../utils/toCurrency';
import Badges from '../Badges';
import { Trend } from '../Trend';
import { ProjectTitle } from '../ProjectTitle';
import { NetworkBadge } from '../NetworkBadge';

type ProjectsTableProps = {
  data: MarketDataWithChangeAndProjectTypes[];
  projectsCount: number;
};

const ProjectsTable: FC<ProjectsTableProps> = ({ data, projectsCount }) => {
  const tableData = {
    rank: { styles: 'mr-2 mb-2 md:mb-0 w-full md:max-w-[25px]', label: '#' },
    name: { styles: 'mr-2 mb-2 md:mb-0 w-full md:max-w-[180px] font-bold', label: 'Name' },
    price: {
      styles:
        'mr-2 mb-2 md:mb-0 w-full md:max-w-[150px] md:before:hidden before:mr-2 before:font-bold before:content-["Price:"]',
      label: 'Price',
    },
    holders: {
      styles:
        'mr-2 mb-2 md:mb-0 w-full md:max-w-[100px] md:before:hidden before:mr-2 before:font-bold before:content-["Holders:"]',
      label: 'Holders',
    },
    avgHoldings: {
      styles:
        'mr-2 mb-2 md:mb-0 w-full md:max-w-[150px] md:before:hidden before:mr-2 before:font-bold before:content-["Avg._Holdings:"]',
      label: 'Avg. Holdings',
    },
    marketCap: {
      styles:
        'mr-2 mb-2 md:mb-0 w-full md:max-w-[150px] md:before:hidden before:mr-2 before:font-bold before:content-["Market_Cap:"]',
      label: 'Market Cap',
    },
    tags: {
      styles:
        'mr-2 mb-2 md:mb-0 w-full md:max-w-[150px] md:before:hidden before:block before:mr-2 before:mb-2 before:font-bold before:content-["Tags:"]',
      label: 'Tags',
    },
    network: {
      styles:
        'flex items-center justify-center mr-2 mb-2 md:mb-0 w-full md:max-w-[80px] md:before:hidden before:block before:mr-2 before:mb-2 before:font-bold before:content-["Network:"]',
      label: 'Tags',
    },
  };

  return (
    <div className="my-10">
      <Container>
        <Title order={2} className="mb-4 text-lightBlue">
          Leaderboard
        </Title>
        <Paper p="md" shadow="sm">
          <div className="hidden md:flex mb-4 p-5 bg-gradient-to-r from-lightBlue to-darkBlue text-white rounded-md sticky top-0 z-10 shadow-xl items-center">
            <div className={`font-bold ${tableData.rank.styles}`}>#</div>
            <div className={`font-bold ${tableData.name.styles}`}>Name</div>
            <div className={`font-bold ${tableData.price.styles}`}>Price / 24%</div>
            <div className={`font-bold ${tableData.holders.styles}`}>Holders</div>
            <div className={`font-bold ${tableData.avgHoldings.styles}`}>Avg. Holdings</div>
            <div className={`font-bold ${tableData.marketCap.styles}`}>Market Cap</div>
            <div className={`font-bold ${tableData.tags.styles}`}>Tags</div>
            <div className={`font-bold ${tableData.network.styles}`}>Network</div>
          </div>
          {data && data.length ? (
            data.map(
              (
                { project: { name, slug, tags, logo, network }, price, marketCap, priceChange, marketCapChange },
                index: number,
              ) => {
                return (
                  <div
                    key={`${name}_${index}`}
                    className="flex flex-col md:flex-row p-5 items-center border-2 mb-2 rounded-md"
                  >
                    <div className={`${tableData.rank.styles} text-xs text-slate-500`}>{index + 1}</div>
                    <div className={`${tableData.name.styles} text-sm `}>
                      <ProjectTitle
                        title={name}
                        size="sm"
                        avatar={logo ? logo.url : ''}
                        component="a"
                        href={`/project/${slug}`}
                      />
                    </div>
                    <div className={`${tableData.price.styles}`}>
                      {<Trend previousValue={priceChange} inline={true} value={toCurrency(price)} />}
                    </div>
                    <div className={`${tableData.holders.styles}`}>79,800</div>
                    <div className={`${tableData.avgHoldings.styles}`}>99,800</div>
                    <div className={`${tableData.marketCap.styles}`}>
                      {<Trend previousValue={marketCapChange} inline={true} value={toCurrency(marketCap)} />}
                    </div>
                    <div className={`${tableData.tags.styles}`}>
                      <Badges badges={tags} />
                    </div>
                    <div className={`${tableData.network.styles}`}>
                      <NetworkBadge network={network} showName={false} />
                    </div>
                  </div>
                );
              },
            )
          ) : (
            <Center>
              <div className="text-center">
                <Text weight={700}>Oops!</Text>
                <Space />
                <Text>Looks like there are no projects currently listed on The Coin Logic!</Text>
              </div>
            </Center>
          )}

          {projectsCount && (
            <div className="my-8 flex justify-between items-center">
              <Text>
                Showing {projectsCount} out of {projectsCount} projects
              </Text>
              {/* <Pagination color="violet" total={300} />
            <NativeSelect data={['10', '20', '30', '50']} placeholder="Pick one" /> */}
            </div>
          )}

          <div className="my-8 text-center">
            <Text weight={700} className="mb-4">
              Can't find your favorite project?
            </Text>
            <Button color="violet">Refer a project and earn rewards!</Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default ProjectsTable;
