import { Text } from '@mantine/core';
import { Column } from '@table-library/react-table-library/types/compact';
import GradientButton from 'components/Buttons/GradientButton';
import PaymentForm from 'components/Forms/PaymentForm';
import GoBack from 'components/GoBack';
import GrayBox from 'components/GrayBox';
import Paper from 'components/Paper';
import Table from 'components/Table';
import { responsiveStylesForLayoutWithSideMenu } from 'components/Table/mainTheme';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import useCart from 'hooks/useCart';
import { useEffect, useState } from 'react';
import useUserStore from 'store/useUserStore';
import { CartItem } from 'types';
import { formateDateWithHours } from 'utils/formatters';
import { Icons } from 'utils/icons';
import { products } from 'utils/products';
import toLocaleString from 'utils/toLocaleString';

const Funding = () => {
  const { user } = useUserStore((state) => state);
  const { cart, addItem, clearItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    clearItems();
  }, []);

  const columns: Column[] = [
    { label: 'Date', renderCell: (token) => formateDateWithHours(token.dateAdded) },
    { label: 'Service Tokens Used', renderCell: (token) => token.used },
    { label: 'Description', renderCell: (token) => token.description },
  ];

  return (
    <div className="w-full">
      <GoBack />
      <div className="my-4">
        <GradientTitle order={2}>Account Funding</GradientTitle>
        <Text size="xs" color="dimmed">
          You account funds will be used to pay for The Coin Logic services. You can view your account funds here and
          top them up if needed.
        </Text>
      </div>
      <div>
        <section className="mb-16">
          <Paper withBorder className="mb-2">
            <GradientText size="xl">
              Account Balance:{' '}
              <strong>{toLocaleString(user?.serviceTokens?.amount || 0) || 0} service tokens (credits)</strong>
            </GradientText>
            <div>
              <GradientText size="sm">
                Pricing: <strong>1 token (credit) - 1 Stablecoin (BUSD, USDT, USDC)</strong>
              </GradientText>
              <Text size="xs" color="dimmed">
                You can fund your account by using stablecoins. The tokens are used to pay for the Coin Logic services.
                The payment is usage-based. For example, a transcription service will use a certain amount of tokens
                based on the length of the audio file and the number of words.
              </Text>
            </div>
          </Paper>
          <div className="flex justify-end">
            <GradientButton leftIcon={isOpen ? <Icons.Cross /> : <Icons.Money />} onClick={() => setIsOpen((o) => !o)}>
              {isOpen ? 'Close form' : 'Fund my account'}
            </GradientButton>
          </div>
        </section>

        {isOpen ? (
          <section className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <GradientText weight={600}>Choose your funding amount</GradientText>
              <GradientButton onClick={() => addItem({ sku: products.sku.addServiceTokens_1 })}>1 Token</GradientButton>
              <GradientButton onClick={() => addItem({ sku: products.sku.addServiceTokens_5 })}>
                5 Tokens
              </GradientButton>
              <GradientButton onClick={() => addItem({ sku: products.sku.addServiceTokens_10 })}>
                10 Tokens
              </GradientButton>
              <GradientButton onClick={() => addItem({ sku: products.sku.addServiceTokens_20 })}>
                20 Tokens
              </GradientButton>
              <GradientButton onClick={() => addItem({ sku: products.sku.addServiceTokens_50 })}>
                50 Tokens
              </GradientButton>
              <GradientButton onClick={() => addItem({ sku: products.sku.addServiceTokens_100 })}>
                100 Tokens
              </GradientButton>
            </div>
            {cart ? <PaymentForm item={cart?.cartItem as CartItem} /> : null}
          </section>
        ) : null}

        <section>
          <GradientText weight={600} className="mb-2">
            Token usage history
          </GradientText>
          {user?.serviceTokens && user?.serviceTokens?.tokenUsage?.length ? (
            <Table
              data={user?.serviceTokens?.tokenUsage || []}
              columns={columns}
              customTheme={{
                Table: `--data-table-library_grid-template-columns: 140px 100px 1fr; ${responsiveStylesForLayoutWithSideMenu}`,
                BaseCell: `> div {
                  white-space: normal;
                }; `,
              }}
            />
          ) : (
            <GrayBox>You currently have no token usage history</GrayBox>
          )}
        </section>
      </div>
    </div>
  );
};

export default Funding;
