import { Progress, Tabs, Text, Title } from '@mantine/core';
import { FC, useState } from 'react';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import toCurrency from 'utils/toCurrency';

type TransactionVolumeTypes = { data: ProjectWithMarketStatsAndChanges };

const TransactionVolume: FC<TransactionVolumeTypes> = ({ data }) => {
  if (!data || !data.txns) {
    return null;
  }

  const [activeTab, setActiveTab] = useState<string>('h24');
  const { txns, volume } = data;

  const transactionsCount = [activeTab].reduce((currVal, value) => {
    currVal = currVal + txns[value].buys + txns[value].sells;
    return currVal;
  }, 0);

  const TabContent = () => (
    <>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <div className="flex-1">
          <Text color="dimmed" size="sm">
            Transactions
          </Text>
          <Text weight={600}>{transactionsCount}</Text>
        </div>

        <div className="flex-1">
          <Text color="dimmed" size="sm">
            Buys
          </Text>
          <Text weight={600}>{txns[activeTab].buys}</Text>
        </div>

        <div className="flex-1">
          <Text color="dimmed" size="sm">
            Sells
          </Text>
          <Text weight={600}>{txns[activeTab].sells}</Text>
        </div>

        <div className="flex-1">
          <Text color="dimmed" size="sm">
            Volume
          </Text>
          <Text weight={600}>{toCurrency(volume[activeTab]) || 0}</Text>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Title order={2}>Transactions Data</Title>
      <Tabs
        onTabChange={(tabIndex: number, tabKey?: string) => setActiveTab(tabKey as string)}
        className="my-4"
        color="violet"
      >
        <Tabs.Tab tabKey="h24" label="24 hours">
          <TabContent />
        </Tabs.Tab>
        <Tabs.Tab tabKey="h6" label="6 hours">
          <TabContent />
        </Tabs.Tab>
        <Tabs.Tab tabKey="h1" label="1 hour">
          <TabContent />
        </Tabs.Tab>
        <Tabs.Tab tabKey="m5" label="5 minutes">
          <TabContent />
        </Tabs.Tab>
      </Tabs>
      <Progress
        value={50}
        radius="md"
        animate
        size={15}
        sections={[
          { value: Math.ceil((txns[activeTab].buys / transactionsCount) * 100), color: 'teal' },
          { value: Math.ceil((txns[activeTab].sells / transactionsCount) * 100), color: 'pink' },
        ]}
      />
    </>
  );
};

export default TransactionVolume;
