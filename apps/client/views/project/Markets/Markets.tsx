import { Avatar, Button, Divider, Text, Title } from '@mantine/core';
import Paper from 'components/Paper';
import GradientTitle from 'components/Text/GradientTitle';
import React, { FC } from 'react';
import { Project } from 'types';

type MarketsProps = {
  data: Project;
};

const Markets: FC<MarketsProps> = ({ data }) => {
  const { liquidityPair, notifications } = data;

  if (!liquidityPair || !liquidityPair.length) {
    return null;
  }

  const alerts = notifications?.filter(({ type }) => type === 'alert');

  const liquidityPairs = liquidityPair.map(({ name, exchange, tokenAddress }, index) => {
    return (
      <div className="mb-4" key={`market_${index}`}>
        <div className="flex justify-between items-center">
          <GradientTitle order={6} className="mb-2">
            {name}
          </GradientTitle>
        </div>
        {exchange ? (
          <Button
            component="a"
            href={`${exchange?.tradeUrl}${tokenAddress}`}
            target="_blank"
            color="violet"
            variant="outline"
            className="w-full"
          >
            <div className="flex items-center w-full">
              <Avatar size={20} color="blue" src={exchange?.logo?.url} className="mr-2" />
              <div>Buy on {exchange?.name}</div>
            </div>
          </Button>
        ) : (
          <Text size="xs" color="dimmed">
            No exchange information available
          </Text>
        )}
      </div>
    );
  });

  return (
    <Paper>
      <GradientTitle order={4}>Markets</GradientTitle>
      <div className="my-4">
        {alerts && alerts.length > 0 ? (
          <Text size="xs" color="dimmed">
            We have turned off available markets data until the issues with the project have been resolved.
          </Text>
        ) : (
          liquidityPairs
        )}
      </div>
    </Paper>
  );
};

export default Markets;
