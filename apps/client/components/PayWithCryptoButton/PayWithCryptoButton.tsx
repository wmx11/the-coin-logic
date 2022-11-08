import { Button, ButtonProps } from '@mantine/core';
import { useAccount, useBalance, useConnectModal, useContractWrite, useWaitForTransaction } from '@web3modal/react';
import { BigNumber } from 'ethers';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import baseAbi from 'tcl-packages/web3/baseAbi';
import config from 'tcl-packages/web3/config';
import { UseFormReturnType } from '@mantine/form';
import { UserOrder } from 'schemas/user';

export type PayWithCryptoButtonOnSuccess = {
  transactionHash: string;
  walletAddress: string;
};

export type PayWithCryptoButtonProps = {
  type?: ButtonProps['type'];
  className?: string;
  size?: ButtonProps['size'];
  form?: UseFormReturnType<UserOrder>;
  txData: {
    contractAddress: `0x${string}`;
    chainId: number;
    decimals: number;
    amount: number;
  };
  onSuccess?: (data: PayWithCryptoButtonOnSuccess) => void;
} & PropsWithChildren;

const PayWithCryptoButton: FC<PayWithCryptoButtonProps> = ({
  children,
  type,
  className,
  size,
  txData,
  onSuccess,
  form,
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { open } = useConnectModal();
  const { account } = useAccount();
  const totalToHexaDecimals = (txData.amount * 10 ** txData.decimals).toString(16).toUpperCase().padStart(4, '0');
  const requestedAmount = BigNumber.from(`0x${totalToHexaDecimals}`);

  const {
    data: balanceData,
    error: balanceError,
    isLoading: isBalanceLoading,
    refetch,
  } = useBalance({ addressOrName: account.address, chainId: txData.chainId, token: txData.contractAddress });

  const {
    data: paymentData,
    error: paymentError,
    isLoading: isPaymentLoading,
    write,
  } = useContractWrite({
    address: txData.contractAddress,
    abi: baseAbi,
    functionName: 'transfer',
    args: [config.receiver, requestedAmount],
    chainId: txData.chainId,
  });

  const { receipt, isWaiting } = useWaitForTransaction({ hash: paymentData?.hash });

  useEffect(() => {
    refetch();
  }, [account.address]);

  const hasSufficientBalance = balanceData && balanceData?.value.gte(requestedAmount);

  const handleClick = async () => {
    if (form && !form.isValid()) {
      return;
    }

    if (!account.address) {
      return open();
    }

    if (account.address && !hasSufficientBalance) {
      return toast.error('Insufficient funds!', {
        toastId: 'transaction-error',
      });
    }

    write();
  };

  const getButtonText = () => {
    if (!account.address) {
      return 'Connect Wallet';
    }

    if (account.address && !hasSufficientBalance) {
      return `Insufficient balance (${balanceData?.formatted.substring(0, 6)} ${balanceData?.symbol})`;
    }

    return children;
  };

  if (receipt && onSuccess && !isSuccess) {
    setIsSuccess(true);

    toast.success('Your payment was received!', {
      toastId: 'transaction-success',
    });

    onSuccess({ transactionHash: receipt.transactionHash, walletAddress: account.address });
  }

  if (paymentError?.message && !isWaiting && !receipt) {
    toast.error(paymentError?.message, {
      toastId: 'transaction-error',
    });
  }

  return (
    <>
      <Button
        type={type}
        className={`${className}`}
        variant="gradient"
        gradient={{ from: 'violet', to: 'grape' }}
        size={size}
        onClick={handleClick}
        disabled={!!account.address && (!hasSufficientBalance || receipt !== undefined)}
        loading={isWaiting}
      >
        {getButtonText()}
      </Button>
    </>
  );
};

export default PayWithCryptoButton;
