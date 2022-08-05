import { Button, Container, Paper, Space, Text, Title } from '@mantine/core';
import React from 'react';

function Hero() {
  return (
    <div className="bg-[url('../public/images/wave4.svg')] bg-no-repeat bg-cover bg-bottom w-full h-screen md:h-[635px] py-10 flex items-center">
      <Container>
        <div className="flex justify-between items-center gap-8 flex-wrap">
          <div className="text-white flex-1">
            <Title order={1} className="text-6xl mb-2">
              Track your project vitals.
              <Space h="md" />
              Make your community happy.
            </Title>
            <Title order={4}>Transparency Through Data</Title>
          </div>

          <div className=" md:min-w-[470px] max-w-[570px]">
            <Paper p="xl" shadow="xl" className="bg-gradient-to-r from-lightBlue to-darkBlue text-white">
              <Text weight={700} size="xl" className="text-3xl mb-4">
                LOG-X
              </Text>
              <Text className="mb-8">
                Actively monitor your on-chain applications in realt time. Present transparent, comprehensive data
                insights with historical data to your community. Get access to personalized KPIs, marketing, sentiment
                analysis, bots, and more.
              </Text>
              <Button color="violet" size="md">
                Get a Quote
              </Button>
            </Paper>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
