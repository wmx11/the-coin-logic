import { Chip, Select, Text, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import Paper from 'components/Paper';
import PayWithCryptoButton from 'components/PayWithCryptoButton';
import { PayWithCryptoButtonOnSuccess } from 'components/PayWithCryptoButton/PayWithCryptoButton';
import useCart from 'hooks/useCart';
import useUser from 'hooks/useUser';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import routes from 'routes';
import { UserOrder, userOrderSchema } from 'schemas/user';
import { CartItem } from 'tcl-packages/types';
import web3Config from 'tcl-packages/web3/config';
import toCurrency from 'utils/toCurrency';
import { calculateItemTotal } from 'utils/utils';

type PaymentFormProps = {
  item: CartItem;
};

const PaymentForm: FC<PaymentFormProps> = ({ item }) => {
  const [paymentNetwork, setPaymentNetwork] = useState('0');
  const [paymentCurrency, setPaymentCurrency] = useState('0');
  const { user } = useUser();
  const { placeOrder, clearItems } = useCart();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const router = useRouter();

  const form = useForm<UserOrder>({
    validate: zodResolver(userOrderSchema),
    initialValues: {
      firstName: '',
      lastName: '',
      paymentNetwork: 0,
      paymentCurrency: '',
      paymentContractAddress: '',
      paymentDecimals: 0,
      duration: '1',
    },
  });

  const getNetwork = () => web3Config.networks[parseInt(paymentNetwork, 10)];
  const getCurrency = () => getNetwork().acceptedCurrencies[parseInt(paymentCurrency, 10)];

  useEffect(() => {
    if (!user) {
      return;
    }

    form.setValues({
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      paymentNetwork: getNetwork().networkId,
      paymentCurrency: getCurrency().name,
      paymentContractAddress: getCurrency().address,
      paymentDecimals: getCurrency().decimals,
    });
  }, [user, paymentNetwork, paymentCurrency]);

  const { price: total } = calculateItemTotal(item, form.values.duration);

  const handleSubmit = () => {};

  const onSuccess = async (data: PayWithCryptoButtonOnSuccess) => {
    if (isOrderPlaced) {
      return;
    }

    setIsOrderPlaced(true);

    const order = await placeOrder({
      firstName: form.values.firstName,
      lastName: form.values.lastName,
      transactionHash: data.transactionHash,
      duration: form.values.duration,
      currency: form.values.paymentCurrency,
      walletAddress: data.walletAddress,
      paymentNetwork: getNetwork().slug,
      apiId: getCurrency().apiId,
      project: router.query['projectId'] || undefined,
    });

    await clearItems();

    window.location.replace(`${routes.checkout.success}?orderId=${order?.id}`);
  };

  return (
    <>
      <Paper className="mb-4">
        <div className="mb-4">
          <Text weight={600}>Product</Text>
          <Text>{item?.product?.name}</Text>
          <Text weight={600}>Price</Text>
          {item?.price === 0 && item?.product?.isMonthly ? (
            <div>7 Day Free Trial</div>
          ) : (
            <div>
              {toCurrency(item?.price as number) || '$0.00'}
              {item.product?.isMonthly ? '/month' : ''}
            </div>
          )}
        </div>

        <div className="mb-4">
          <Text weight={600}>Billed To</Text>
          <Text>{user?.email}</Text>
        </div>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <div className="flex flex-col gap-4">
            <TextInput label="First Name" {...form.getInputProps('firstName')} required size="md" />
            <TextInput label="Last Name" {...form.getInputProps('lastName')} required size="md" />

            {item?.product?.isMonthly && (item?.price as number) > 0 ? (
              <Select
                label="Duration"
                defaultValue="1"
                size="md"
                {...form.getInputProps('duration')}
                data={[
                  { label: '1 Month', value: '1' },
                  { label: '3 Months', value: '3' },
                  { label: '6 Months', value: '6' },
                  { label: '9 Months', value: '9' },
                  { label: '12 Months', value: '12' },
                ]}
              />
            ) : null}

            {(item?.price as number) > 0 && (
              <>
                <div className="flex flex-col gap-2">
                  <div className="mb-2">
                    <Text className="mb-2" weight={600}>
                      Payment Network
                    </Text>
                    <Chip.Group multiple={false} value={paymentNetwork} onChange={setPaymentNetwork} spacing="xs">
                      {web3Config.networks.map((item, index) => {
                        return (
                          <Chip
                            size="sm"
                            color="violet"
                            value={index.toString()}
                            key={`network_${index}`}
                            className="flex gap-2 items-center"
                          >
                            <Image src={item.logo} width={10} height={10} />
                            <span className="ml-2">{item.name}</span>
                          </Chip>
                        );
                      })}
                    </Chip.Group>
                  </div>

                  <div>
                    <Text className="mb-2" weight={600}>
                      Payment Currency
                    </Text>
                    <Chip.Group multiple={false} value={paymentCurrency} onChange={setPaymentCurrency} spacing="xs">
                      {getNetwork().acceptedCurrencies.map((item, index) => {
                        return (
                          <Chip
                            size="sm"
                            color="violet"
                            value={index.toString()}
                            key={`currency_${index}`}
                            className="flex gap-2 items-center"
                          >
                            <Image src={item.logo} width={10} height={10} />
                            <span className="ml-2">{item.name}</span>
                          </Chip>
                        );
                      })}
                    </Chip.Group>
                  </div>
                </div>
              </>
            )}

            <div className="text-right">
              <Text weight={600}>
                Discount: {item?.price === 0 ? '0%' : `${item?.product?.discount || item?.discount}%`}
              </Text>
              <Text weight={600}>Tax VAT: {item?.price === 0 ? '0%' : `${item?.tax}%`}</Text>
              <Text weight={600} size="xl">
                Total Billed: {item?.price === 0 ? '$0' : toCurrency((total as number) || 0)}
              </Text>
            </div>

            <div>
              <Text size="sm" color="dimmed">
                {item?.price === 0 ? (
                  <div>
                    By clicking "Place Order", you agree that after the free trial period you will have to purchase the
                    license in order to use this product. You acknowledge that refunds are not available for these
                    products.
                  </div>
                ) : (
                  <div>
                    By clicking "Place Order", you agree to pay {toCurrency((total as number) || 0)}. You acknowledge
                    that refunds are not available for these products.
                  </div>
                )}
              </Text>
            </div>
            <PayWithCryptoButton
              size="md"
              type="submit"
              form={form}
              txData={{
                amount: total,
                chainId: form.values.paymentNetwork,
                contractAddress: form.values.paymentContractAddress as `0x${string}`,
                decimals: form.values.paymentDecimals,
              }}
              onSuccess={(data) => onSuccess(data)}
            >
              Place Order
            </PayWithCryptoButton>
          </div>
        </form>
      </Paper>
    </>
  );
};

export default PaymentForm;
