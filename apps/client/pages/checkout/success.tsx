import { Container, Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import Paper from 'components/Paper';
import GradientTitle from 'components/Text/GradientTitle';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import OrderDone from 'public/images/order_done.svg';
import { FC } from 'react';
import { Order } from 'tcl-packages/types';
import { formatDate } from 'utils/formatters';
import toCurrency from 'utils/toCurrency';
import prisma from '../../data/prisma';
import GradientText from 'components/Text/GradientText';

type SuccessProps = {
  order: Order;
};

const Success: FC<SuccessProps> = ({ order }) => {
  const { project } = order;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Container className="py-10">
        <div className="flex gap-4 justify-between flex-col md:flex-row">
          <div className="mb-8 flex-1 md:max-w-[500px]">
            <GradientTitle order={1} className="mb-4">
              Thank you
            </GradientTitle>
            <Text>
              Thank you for using The Coin Logic. If you have any questions regarding your purchase, please contact us!
            </Text>
            <Image src={OrderDone} width={300} height={300} />
          </div>

          <div className="mb-8 flex-1">
            <Text weight={600} className="mb-2">
              Order Details:
            </Text>
            <Paper>
              <div>
                <GradientTitle weight={700}>{order.orderItem && order?.orderItem?.product?.name}</GradientTitle>
                <Text color="dimmed" size="xs" className="mb-4">
                  {order?.orderItem && order?.orderItem?.product?.description}
                </Text>
              </div>
              <div>
                {project?.paymentPlan ? (
                  <>
                    <GradientText weight={700}>Payment Plan: {project.paymentPlan.name}</GradientText>
                    <Text color="dimmed" size="xs" className="mb-4">
                      {project.paymentPlan.description}
                    </Text>
                  </>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <Text>
                  <strong>Date: </strong>
                  {formatDate(new Date())}
                </Text>
                <Text>
                  <strong>Order Number: </strong>
                  {order.orderNumber || 0}
                </Text>
                <Text className="mb-2">
                  <strong>Proof of payment: </strong>
                  <div>
                    <a
                      href={`${order.paymentNetwork?.txScanner}/${order.transactionHash}`}
                      target="_blank"
                      className="underline text-violet break-all"
                    >
                      {order.transactionHash}
                    </a>
                  </div>
                </Text>
                <Text>
                  <strong>Discount: </strong>
                  {order.discount || 0}%
                </Text>
                <Text>
                  <strong>Total Billed: </strong>
                  {toCurrency(order.grandTotal as number) || '$0.00'}
                </Text>
              </div>
            </Paper>
          </div>
        </div>

        <div className="w-full text-center">
          <Link href="/" passHref>
            <GradientButton component="a" color="violet" size="md">
              Continue to Homepage
            </GradientButton>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Success;

export const getServerSideProps: GetServerSideProps = async ({ req, res, params, query }) => {
  const { orderId } = query;

  const order = await prisma.order.findFirst({
    where: {
      id: (orderId as string) || undefined,
    },
    select: {
      orderNumber: true,
      grandTotal: true,
      transactionHash: true,
      durationInMonths: true,
      discount: true,
      orderItem: {
        select: {
          product: {
            select: {
              description: true,
              name: true,
            },
          },
        },
      },
      paymentNetwork: {
        select: {
          txScanner: true,
        },
      },
      project: {
        select: {
          paymentPlan: {
            select: {
              name: true,
              description: true,
            },
          },
        },
      },
    },
  });

  if (!orderId || !order) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      order,
    },
  };
};
