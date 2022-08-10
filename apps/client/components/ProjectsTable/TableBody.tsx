import { Center, Space, Text } from '@mantine/core';
import { Badges } from 'components/Badges';
import { NetworkBadge } from 'components/NetworkBadge';
import { ProjectTitle } from 'components/ProjectTitle';
import { Trend } from 'components/Trend';
import React, { FC } from 'react';
import { Tag, Network } from 'types';
import toCurrency from 'utils/toCurrency';
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
          <Text>Looks like there are no projects currently listed on The Coin Logic!</Text>
        </div>
      </Center>
    );
  }

  return (
    <>
      {data.map((item, index: number) => {
        const { name, slug, tags, logo, network } = item.project;
        const { price, marketCap, priceChange, marketCapChange } = item;

        return (
          <div key={`${name}_${index}`} className="flex flex-col md:flex-row p-5 items-center border-2 mb-2 rounded-md">
            <div className={`${TABLE_DATA.rank.styles} text-xs text-slate-500`}>{index + 1}</div>
            <div className={`${TABLE_DATA.name.styles} text-sm `}>
              <ProjectTitle
                title={name as string}
                size="sm"
                avatar={logo ? logo.url : ''}
                component="a"
                href={`/project/${slug}`}
              />
            </div>
            <div className={`${TABLE_DATA.price.styles}`}>
              {<Trend previousValue={priceChange} inline={true} value={toCurrency(price as number)} />}
            </div>
            <div className={`${TABLE_DATA.holders.styles}`}>79,800</div>
            <div className={`${TABLE_DATA.avgHoldings.styles}`}>99,800</div>
            <div className={`${TABLE_DATA.marketCap.styles}`}>
              {<Trend previousValue={marketCapChange} inline={true} value={toCurrency(marketCap as number)} />}
            </div>
            <div className={`${TABLE_DATA.tags.styles}`}>
              <Badges badges={tags as Tag[]} />
            </div>
            <div className={`${TABLE_DATA.network.styles}`}>
              <NetworkBadge network={network as Network} showName={false} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TableBody;
