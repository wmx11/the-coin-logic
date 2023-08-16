import { NumberInput, Tabs } from '@mantine/core';
import { useAccount, useConnectModal, useContractRead, useContractWrite, useNetwork } from '@web3modal/react';
import GradientButton from 'components/Buttons/GradientButton';
import Paper from 'components/Paper';
import GradientTitle from 'components/Text/GradientTitle';
import { BigNumber, ethers } from 'ethers';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import customAbi from 'tcl-packages/custom-tokens/cll5cks9r14572415fzkt5brjgay/abi';
import { Project } from 'tcl-packages/types';
import baseAbi from 'tcl-packages/web3/baseAbi';
import config from 'tcl-packages/web3/config';
import { toBigNumber } from 'tcl-packages/web3/utils';

type BuyAndSellTokensProps = {
  data: Project;
};

const BuyAndSellTokens: FC<BuyAndSellTokensProps> = ({ data }) => {
  if (!data?.ABI?.buyAndSell) {
    return null;
  }

  const POLYGON = 137;
  const USDC_ADDRESS = config.networks.find((item) => item.networkId === POLYGON)?.acceptedCurrencies.at(0)
    ?.address as string;
  const USDC_ADDRESS_DECIMALS = config.networks.find((item) => item.networkId === POLYGON)?.acceptedCurrencies.at(0)
    ?.decimals as number;

  const [isBuy, setIsBuy] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [tokenAAmount, setTokenAAmount] = useState<number | undefined>(0);
  const [tokenBAmount, setTokenBAmount] = useState<number | undefined>(0);
  const { account } = useAccount();
  const { open } = useConnectModal();
  const { network } = useNetwork();

  const { data: allowance, isLoading: isLoadingAllowance } = useContractRead({
    abi: baseAbi,
    address: USDC_ADDRESS,
    functionName: 'allowance',
    chainId: POLYGON,
    args: [account?.address, data.contractAddress],
  });

  const { data: rhyzePrice, isLoading: isLoadingRhyzePrice } = useContractRead({
    abi: customAbi,
    address: data.contractAddress as string,
    functionName: 'sevenUpPriceInStablecoins',
    chainId: POLYGON,
    args: [],
  });

  const {
    data: rhyzeBalance,
    isLoading: isLoadingRhyzeBalance,
    refetch: refetchRhyzeBalance,
  } = useContractRead({
    abi: baseAbi,
    address: data.contractAddress as string,
    functionName: 'balanceOf',
    chainId: POLYGON,
    args: [account?.address],
  });

  const {
    data: usdcBalance,
    isLoading: isLoadingUsdcBalance,
    error: usdcError,
    refetch: refetchUsdcBalance,
  } = useContractRead({
    abi: baseAbi,
    address: USDC_ADDRESS,
    functionName: 'balanceOf',
    chainId: POLYGON,
    args: [account?.address],
  });

  const {
    write: approve,
    isLoading: isLoadingApprove,
    error: errorApprove,
  } = useContractWrite({
    abi: baseAbi,
    functionName: 'approve',
    address: USDC_ADDRESS,
    chainId: POLYGON,
    args: [data.contractAddress, toBigNumber(10000000000)],
  });

  const {
    write: buy,
    isLoading: isLoadingBuy,
    error: errorBuy,
    data: dataBuy,
  } = useContractWrite({
    abi: customAbi,
    address: data.contractAddress as string,
    functionName: 'mint',
    chainId: POLYGON,
    args: [ethers.utils.parseUnits((tokenBAmount || 0).toString()).toString()],
  });

  const {
    write: sell,
    isLoading: isLoadingSell,
    error: errorSell,
    data: dataSell,
  } = useContractWrite({
    abi: customAbi,
    address: data.contractAddress as string,
    functionName: 'sellSevenUp',
    chainId: POLYGON,
    args: [ethers.utils.parseUnits((tokenAAmount || 0).toString()).toString()],
  });

  const handleApprove = async () => {
    setIsLoading(true);
    const data = await approve();
    console.log(errorApprove);
    toast.success(`Your transaction has been submitted!`);
    await data?.wait();
    toast.success(`You have successfully approved the contract`);
    setIsLoading(false);
  };

  const handleBuy = async () => {
    setIsLoading(true);
    const data = await buy();
    toast.success(`Your transaction has been submitted!`);
    await data?.wait();
    toast.success(`You have successfully bought ${tokenAAmount} Rhyze`);
    setIsLoading(false);
    setTokenAAmount(undefined);
    setTokenBAmount(undefined);
    refetchRhyzeBalance();
    refetchUsdcBalance();
  };

  const handleSell = async () => {
    setIsLoading(true);
    const data = await sell();
    toast.success(`Your transaction has been submitted!`);
    await data?.wait();
    toast.success(`You have successfully sold ${tokenAAmount} Rhyze`);
    setIsLoading(false);
    setTokenAAmount(undefined);
    setTokenBAmount(undefined);
    refetchRhyzeBalance();
    refetchUsdcBalance();
  };

  const handleTokenAChange = (value: number) => {
    const tokenAPrice = rhyzePrice ? parseFloat(ethers.utils.formatUnits(rhyzePrice as BigNumber)) : 0;
    const safeValue = value < 0 ? 0 : value;
    setTokenAAmount(safeValue);
    setTokenBAmount(safeValue * tokenAPrice);
  };

  const handleTokenBChange = (value: number) => {
    const tokenAPrice = rhyzePrice ? parseFloat(ethers.utils.formatUnits(rhyzePrice as BigNumber)) : 0;
    const safeValue = value < 0 ? 0 : value;
    setTokenAAmount(safeValue / tokenAPrice);
    setTokenBAmount(safeValue);
  };

  const renderButtons = () => {
    if (!account?.address) {
      return (
        <GradientButton className="w-full capitalize" onClick={open}>
          Connect Wallet
        </GradientButton>
      );
    }
    if (network?.chain?.id !== POLYGON) {
      return (
        <GradientButton className="w-full capitalize" disabled>
          Please make sure you are on Polygon network
        </GradientButton>
      );
    }
    if (parseFloat(ethers.utils.formatUnits((allowance as BigNumber) || '0')) < 1) {
      return (
        <GradientButton className="w-full capitalize" onClick={handleApprove} loading={isLoadingApprove}>
          Approve Contract
        </GradientButton>
      );
    }
    return (
      <GradientButton
        className="w-full capitalize"
        onClick={isBuy ? () => handleBuy() : () => handleSell()}
        loading={isLoading}
        disabled={tokenAAmount === undefined || tokenAAmount === 0}
      >
        {isBuy ? 'Buy' : 'Sell'} {data.name}
      </GradientButton>
    );
  };

  const renderTokenA = () => {
    return (
      <div>
        <div className="flex justify-between items-center mb-2">
          <div>Rhyze</div>
          <div className="text-xs text-slate-500">
            Balance:{' '}
            {isLoadingRhyzeBalance
              ? '...'
              : parseFloat(ethers.utils.formatUnits((rhyzeBalance as BigNumber) || '0')).toFixed(6)}
          </div>
        </div>
        <NumberInput
          hideControls
          placeholder="0"
          precision={3}
          value={tokenAAmount || undefined}
          onChange={handleTokenAChange}
        />
      </div>
    );
  };

  const renderTokenB = () => {
    return (
      <div>
        <div className="flex justify-between items-center mb-2">
          <div>USDC</div>
          <div className="text-xs text-slate-500">
            Balance:{' '}
            {isLoadingUsdcBalance
              ? '...'
              : parseFloat(ethers.utils.formatUnits((usdcBalance as BigNumber) || '0', USDC_ADDRESS_DECIMALS)).toFixed(
                  6,
                )}
          </div>
        </div>
        <NumberInput
          hideControls
          placeholder="0"
          precision={3}
          value={tokenAAmount || undefined}
          onChange={handleTokenBChange}
        />
      </div>
    );
  };

  return (
    <Paper>
      <GradientTitle order={4} className="mb-4">
        Buy and Sell {data?.name}
      </GradientTitle>
      <div className="mb-4">
        <Tabs
          variant="pills"
          defaultValue="buy"
          color="violet"
          value={isBuy ? 'buy' : 'sell'}
          onTabChange={(value) => {
            setIsBuy(value === 'buy');
          }}
        >
          <Tabs.List grow>
            <Tabs.Tab value="buy">Buy Rhyze</Tabs.Tab>
            <Tabs.Tab value="sell">Sell Rhyze</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
      <div className="space-y-4">
        {renderTokenA()}
        {renderTokenB()}
        {renderButtons()}
      </div>
    </Paper>
  );
};

export default BuyAndSellTokens;
