import { Avatar, Button, Paper, Text, Title } from '@mantine/core';
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

  const liquidityPairs = liquidityPair.map(({ name, exchange, address }, index) => {
    return (
      <div className="mb-4" key={`market_${index}`}>
        <Title order={6} className="mb-2">
          {name}
        </Title>
        {exchange ? (
          <Button
            component="a"
            href={`${exchange?.tradeUrl}${address}`}
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
    <Paper p="md" shadow="sm" withBorder>
      <Title order={4} className="mb-4">
        Markets
      </Title>
      {(alerts && alerts.length > 0) ? (
        <Text size="xs" color="dimmed">
          We have turned off available markets data until the alerts and issues with the project have been resolved.
        </Text>
      ) : (
        liquidityPairs
      )}
    </Paper>
  );
};

export default Markets;
