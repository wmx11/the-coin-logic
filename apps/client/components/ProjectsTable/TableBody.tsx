import { Center, Space, Text } from '@mantine/core';
import { Badges } from 'components/Badges';
import { NetworkBadge } from 'components/NetworkBadge';
import NotificationBar from 'components/NotificationBar';
import { ProjectTitle } from 'components/ProjectTitle';
import { Trend } from 'components/Trend';
import Link from 'next/link';
import React, { FC } from 'react';
import { Tag, Network } from 'types';
import { PreviousValueTypes } from 'types/MarketData';
import toCurrency from 'utils/toCurrency';
import toLocaleString from 'utils/toLocaleString';
import { TABLE_DATA } from './constants';
import { TableData } from './types';

type TableBodyProps = {
  data: TableData[];
};

const TableBody: FC<TableBodyProps> = ({ data }) => {
  if (!data || !data.length) {
    return (
      <Center>
        <div className="text-center">
          <Text weight={700}>Oops!</Text>
          <Space />
          <Text>Looks like there are no projects currently listed!</Text>
        </div>
      </Center>
    );
  }

  return (
    <>
      {data.map((item, index: number) => {
        const { name, slug, tags, logo, network, notifications } = item.project;
        const {
          price,
          marketCap,
          holders,
          avgHoldings,
          priceChange,
          marketCapChange,
          holdersChange,
          avgHoldingsChange,
        } = item;

        return (
          <div key={`${name}_${index}`} className="border-2 mb-2 rounded-md">
            {notifications?.map((notification, index) => (
              <NotificationBar size="xs" mb="0" notification={notification} key={`notification_${index}`} />
            ))}
            <Link href={`/project/${slug}`}>
              <a className="flex flex-col md:flex-row p-5 items-center hover:shadow-md transition-shadow">
                <div className={`${TABLE_DATA.rank.styles} text-xs text-slate-500`}>{index + 1}</div>
                <div className={`${TABLE_DATA.name.styles} text-sm `}>
                  <ProjectTitle
                    title={name as string}
                    size="sm"
                    avatar={logo ? logo.url : ''}
                  />
                </div>
                <div className={`${TABLE_DATA.price.styles}`}>
                  {
                    <Trend
                      previousValue={priceChange as PreviousValueTypes}
                      inline={true}
                      value={toCurrency(price as number)}
                    />
                  }
                </div>
                <div className={`${TABLE_DATA.holders.styles}`}>
                  {
                    <Trend
                      previousValue={holdersChange as PreviousValueTypes}
                      inline={true}
                      value={toLocaleString(holders as number)}
                    />
                  }
                </div>
                <div className={`${TABLE_DATA.avgHoldings.styles}`}>
                  {
                    <Trend
                      previousValue={avgHoldingsChange as PreviousValueTypes}
                      inline={true}
                      value={toLocaleString(avgHoldings as number)}
                    />
                  }
                </div>
                <div className={`${TABLE_DATA.marketCap.styles}`}>
                  {
                    <Trend
                      previousValue={marketCapChange as PreviousValueTypes}
                      inline={true}
                      value={toCurrency(marketCap as number)}
                    />
                  }
                </div>
                <div className={`${TABLE_DATA.tags.styles}`}>
                  <Badges badges={tags as Tag[]} />
                </div>
                <div className={`${TABLE_DATA.network.styles}`}>
                  <NetworkBadge network={network as Network} showName={false} />
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default TableBody;
