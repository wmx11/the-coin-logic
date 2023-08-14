import { NumberInput, Tabs } from '@mantine/core';
import { useAccount, useConnectModal, useNetwork } from '@web3modal/react';
import GradientButton from 'components/Buttons/GradientButton';
import Paper from 'components/Paper';
import GradientTitle from 'components/Text/GradientTitle';
import React, { FC, useState } from 'react';
import { Project } from 'tcl-packages/types';

type BuyAndSellTokensProps = {
  data: Project;
};

const BuyAndSellTokens: FC<BuyAndSellTokensProps> = ({ data }) => {
  if (!data?.ABI?.buyAndSell) {
    return null;
  }

  const [transactionType, setTransactionType] = useState<string | null>('buy');
  const { account } = useAccount();
  const { open } = useConnectModal();
  const { network } = useNetwork();

  console.log(network?.chain);
  

  const renderButtons = () => {
    if (!account) {
      return (
        <GradientButton className="w-full capitalize" onClick={open}>
          Connect Wallet
        </GradientButton>
      );
    }

    if (network?.chain?.id !== 137) {

    }
  };

  return (
    <Paper>
      <GradientTitle order={4}>Buy and Sell {data?.name}</GradientTitle>
      <div className="my-4">
        <Tabs
          variant="pills"
          defaultValue="buy"
          value={transactionType}
          color="violet"
          onTabChange={setTransactionType}
        >
          <Tabs.List>
            <Tabs.Tab value="buy">Buy {data?.name}</Tabs.Tab>
            <Tabs.Tab value="sell">Sell {data?.name}</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
      <div className="space-y-4">
        <NumberInput label={`Amount of ${data?.name} to ${transactionType}`} />
        {!account?.address ? (
          <GradientButton className="w-full capitalize" onClick={open}>
            Connect Wallet
          </GradientButton>
        ) : (
          <GradientButton className="w-full capitalize">{transactionType} Rhyze</GradientButton>
        )}
      </div>
    </Paper>
  );
};

export default BuyAndSellTokens;
