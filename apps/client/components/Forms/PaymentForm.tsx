import { Chip, Select, Text, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import GradientButton from 'components/Buttons/GradientButton';
import Paper from 'components/Paper';
import PayWithCryptoButton from 'components/PayWithCryptoButton';
import { PayWithCryptoButtonOnSuccess } from 'components/PayWithCryptoButton/PayWithCryptoButton';
import { QUERY_PROJECT_ID } from 'constants/general';
import useCart from 'hooks/useCart';
import useUser from 'hooks/useUser';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import routes from 'routes';
import { UserOrder, userOrderSchema } from 'schemas/user';
import { CartItem } from 'tcl-packages/types';
import web3Config from 'tcl-packages/web3/config';
import { Icons } from 'utils/icons';
import toCurrency from 'utils/toCurrency';
import { calculateItemTotal } from 'utils/utils';

type PaymentFormProps = {
  item: CartItem;
};

const PaymentForm: FC<PaymentFormProps> = ({ item }) => {
  const { user } = useUser();
  const { placeOrder, applyCoupon, couponError, isCouponApplied, couponCode, setCouponCode } = useCart();
  const [paymentNetwork, setPaymentNetwork] = useState('0');
  const [paymentCurrency, setPaymentCurrency] = useState('0');
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
    const order = await placeOrder({
      firstName: form.values.firstName,
      lastName: form.values.lastName,
      transactionHash: data.transactionHash,
      duration: form.values.duration,
      currency: form.values.paymentCurrency,
      walletAddress: data.walletAddress,
      paymentNetwork: getNetwork().slug,
      apiId: getCurrency().apiId,
      project: router.query[QUERY_PROJECT_ID] || undefined,
    });

    window.location.replace(`${routes.checkout.success}?orderId=${order?.id}`);
  };

  return (
    <>
      <Paper className="mb-4" withBorder>
        <div className="mb-4">
          <div>
            <Text weight={600}>Product</Text>
            <Text>{item?.product?.name}</Text>
            {item.paymentPlan ? (
              <Text size="xs" color="violet">
                Payment Plan: {item?.paymentPlan?.name}
              </Text>
            ) : null}
          </div>
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
            <TextInput
              label="First Name"
              description="Used for invoicing purposes. Not strictly required."
              {...form.getInputProps('firstName')}
              size="md"
            />
            <TextInput
              label="Last Name"
              description="Used for invoicing purposes. Not strictly required."
              {...form.getInputProps('lastName')}
              size="md"
            />

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

            {(item?.price as number) > 0 ? (
              <div>
                {isCouponApplied ? null : (
                  <div className="flex gap-2 items-end">
                    <TextInput
                      label="Coupon code"
                      description="Have a discount coupon?"
                      className="flex-1"
                      value={couponCode}
                      onChange={(event) => setCouponCode(event.currentTarget.value)}
                    />

                    <GradientButton
                      onClick={() =>
                        applyCoupon({ couponCode, projectId: (router.query[QUERY_PROJECT_ID] as string) || undefined })
                      }
                    >
                      Apply
                    </GradientButton>
                  </div>
                )}

                {isCouponApplied ? (
                  <div className="flex justify-between items-end border-b pb-2 mt-4">
                    <div className="flex gap-2 items-center">
                      <Icons.Ticket />
                      <Text size="sm" color="dimmed">
                        {couponCode}
                      </Text>
                    </div>
                    <GradientButton onClick={() => applyCoupon({ couponCode, revoke: true })} size="xs">
                      Revoke
                    </GradientButton>
                  </div>
                ) : null}
                <Text size="xs" color="red">
                  {couponError}
                </Text>
              </div>
            ) : null}

            <div className="text-right">
              <Text weight={600}>
                Discount: {item?.price === 0 ? '0%' : `${item?.product?.discount || item?.discount}%`}
              </Text>
              <Text weight={600}>Tax VAT: {item?.price === 0 ? '0%' : `${item?.tax}%`}</Text>
              <Text weight={600} size="xl">
                Total Billed: {item?.price === 0 ? '$0' : toCurrency((total as number) || 0) || '$0'}
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
