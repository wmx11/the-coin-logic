import { gql } from '@apollo/client';
import {
  Avatar,
  Badge,
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Paper,
  Spoiler,
  Tab,
  Text,
  Title,
} from '@mantine/core';
import React from 'react';
import { BsBarChartLineFill } from 'react-icons/bs';
import { FaDiscord, FaTwitter, FaWallet } from 'react-icons/fa';
import TrackVitalsDisclaimer from '../../components/TrackVitalsDisclaimer';
import client from '../../data/apollo-client';

function project({ projectData }) {
  console.log(projectData);

  return (
    <Container className="py-10">
      <div className="flex justify-between mb-8">
        <div>
          <div className="flex gap-4 items-center mb-2">
            <Avatar src="../images/titano.png" alt="Titano" size="md" />
            <Title order={1} className=" text-lightBlue">
              {projectData && projectData.project.name}
            </Title>
          </div>

          <div className="flex gap-2">
            {projectData &&
              projectData.project.tags.map(({ name }: { name: string }, index: number) => {
                return (
                  <Badge key={`${name}_${index}`} color="violet">
                    {name}
                  </Badge>
                );
              })}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <Grid columns={12}>
          <Grid.Col span={8}>
            <Paper p="md" shadow="sm" withBorder>
              <div className="flex justify-between items-center gap-4 mb-4">
                <Title order={4} className="text-lightBlue">
                  About the project
                </Title>
                <Badge color="violet">Onboarded 2022-02-02</Badge>
              </div>
              <div className="mb-4">
                <Text size="sm">
                  <strong>Official Website:</strong> https://titano.finance/
                </Text>
                <Text size="sm">
                  <strong>Contract Address:</strong> 0x4e3cABD3AD77420FF9031d19899594041C420aeE
                </Text>
                <Text size="sm">
                  <strong>Pair Address:</strong> 0x4e3cABD3AD77420FF9031d19899594041C420aeE
                </Text>
              </div>

              <div className="mb-4">
                <Text size="sm" weight={700}>
                  Description
                </Text>
                <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide" className="text-sm">
                  {projectData && projectData.project.description}
                </Spoiler>
              </div>

              <div className="mb-4">
                <Text size="sm" weight={700} className="mb-2">
                  Socials
                </Text>
                <div className="flex items-center gap-4">
                  <Avatar
                    component="a"
                    radius="xl"
                    size="sm"
                    href="https://github.com/rtivital"
                    target="_blank"
                    src={null}
                    alt="it's me"
                  />
                  <Avatar
                    component="a"
                    radius="xl"
                    size="sm"
                    href="https://github.com/rtivital"
                    target="_blank"
                    src={null}
                    alt="it's me"
                  />
                  <Avatar
                    component="a"
                    radius="xl"
                    size="sm"
                    href="https://github.com/rtivital"
                    target="_blank"
                    src={null}
                    alt="it's me"
                  />
                </div>
              </div>
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Paper p="md" shadow="sm" withBorder>
              <Title order={4} className="mb-4 text-lightBlue">
                Latest Announcements
              </Title>

              <div className="mb-4">
                <Title order={6} className="text-lightBlue">
                  Weekly Summary
                </Title>
                <Text className="text-slate-500 mb-4 text-xs">2022-10-10 10:10</Text>
              </div>
              <div className="mb-4">
                <Title order={6} className="text-lightBlue">
                  Titan Talk Episode 10
                </Title>
                <Text className="text-slate-500 mb-4 text-xs">2022-10-10 10:10</Text>
              </div>
              <div className="mb-4">
                <Title order={6} className="text-lightBlue">
                  TikTok Video #2
                </Title>
                <Text className="text-slate-500 mb-4 text-xs">2022-10-10 10:10</Text>
              </div>

              <Divider
                my="xs"
                labelPosition="center"
                label="Get more"
                labelProps={{ component: 'a', href: 'https://mantine.dev', variant: 'link', color: 'blue' }}
              />
            </Paper>
          </Grid.Col>
        </Grid>
      </div>

      <div className="mb-16">
        <div className="flex gap-2 items-center">
          <BsBarChartLineFill className="text-xl" />
          <Title order={2} className=" text-lightBlue">
            Titano to USD Chart
          </Title>
        </div>
      </div>

      <div className="mb-16">
        <div className="flex gap-2 items-center">
          <BsBarChartLineFill className="text-xl" />
          <Title order={2} className=" text-lightBlue">
            Market Data
          </Title>
        </div>

        <Text className="text-slate-500 mb-4" size="sm">
          Last updated 2022-10-10 10:10
        </Text>
        <div>
          <div className="flex items-center flex-wrap gap-4">
            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Price</Text>
              <Text weight={700} className="text-3xl">
                {projectData && projectData.price}
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Market Cap</Text>
              <Text weight={700} className="text-3xl">
                $35,000,000
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Treasury</Text>
              <Text weight={700} className="text-3xl">
                $6,375,456
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">RFV</Text>
              <Text weight={700} className="text-3xl">
                $2,101,206
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Liquidity</Text>
              <Text weight={700} className="text-3xl">
                $2,845,281
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Holders</Text>
              <Text weight={700} className="text-3xl">
                78,061
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Average Holdings</Text>
              <Text weight={700} className="text-3xl">
                107,283
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">BNB Price</Text>
              <Text weight={700} className="text-3xl">
                $254
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Total Supply</Text>
              <Text weight={700} className="text-3xl">
                13,499,226,759
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Tokens Burned</Text>
              <Text weight={700} className="text-3xl">
                485,849,286
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Circulating Supply</Text>
              <Text weight={700} className="text-3xl">
                13,013,377,473
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="flex gap-2 items-center">
          <FaWallet className="text-xl" />
          <Title order={2} className="text-lightBlue">
            Holders Data
          </Title>
        </div>

        <Text className="text-slate-500 mb-4" size="sm">
          Last updated 2022-10-10 10:10
        </Text>

        <div>
          <div className="flex items-stretch flex-wrap gap-4">
            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Holders</Text>
              <Text weight={700} className="text-3xl">
                78,061
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Average Holdings</Text>
              <Text weight={700} className="text-3xl">
                107,283
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Average Holdings (USD)</Text>
              <Text weight={700} className="text-3xl">
                $278
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">New Holders Today</Text>
              <Text weight={700} className="text-3xl">
                50
              </Text>
              <Text className="text-slate-500"></Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Returning Holders Today</Text>
              <Text weight={700} className="text-3xl">
                5
              </Text>
              <Text className="text-slate-500"></Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Sold 100% of tokens</Text>
              <Text weight={700} className="text-3xl">
                10
              </Text>
              <Text className="text-slate-500"></Text>
            </Paper>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <Title order={2} className="mb-4 text-lightBlue">
          Social Analysis
        </Title>

        <div className="mb-8">
          <div className="flex gap-2 items-center mb-4">
            <FaDiscord className="text-xl" />
            <Text weight={700} size="xl">
              Discord
            </Text>
          </div>
          <div className="flex items-stretch flex-wrap gap-4">
            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Members</Text>
              <Text weight={700} className="text-3xl">
                78,061
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">New Members</Text>
              <Text weight={700} className="text-3xl">
                40
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Leaving Members</Text>
              <Text weight={700} className="text-3xl">
                5
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Messages</Text>
              <Text weight={700} className="text-3xl">
                50,000
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Activity</Text>
              <Text weight={700} className="text-3xl">
                Active
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Social Sentiment Index</Text>
              <Text weight={700} className="text-3xl">
                90/100
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>
          </div>
        </div>

        <div>
          <div className="flex gap-2 items-center mb-4">
            <FaTwitter className="text-xl" />
            <Text weight={700} size="xl">
              Twitter
            </Text>
          </div>
          <div className="flex items-stretch flex-wrap gap-4">
            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Members</Text>
              <Text weight={700} className="text-3xl">
                78,061
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">New Members</Text>
              <Text weight={700} className="text-3xl">
                40
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Leaving Members</Text>
              <Text weight={700} className="text-3xl">
                5
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Messages</Text>
              <Text weight={700} className="text-3xl">
                50,000
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Activity</Text>
              <Text weight={700} className="text-3xl">
                Active
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>

            <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center">
              <Text className="text-slate-500">Social Sentiment Index</Text>
              <Text weight={700} className="text-3xl">
                90/100
              </Text>
              <Text className="text-slate-500">↗︎ 400 (22%)</Text>
            </Paper>
          </div>
        </div>
      </div>

      <TrackVitalsDisclaimer />
    </Container>
  );
}

export default project;

type Params = {
  params: {
    slug: string;
  };
};

export const getServerSideProps = async ({ params }: Params) => {
  const slug = params.slug;

  const { data } = await client.query({
    query: gql`{
      marketStats(where: { project: { slug: { equals: "${slug}" } } }) {
        price
        project {
          name
          website
          contractAddress
          pairAddress
          description
          twitter
          discord
          telegram
          reddit
          tags {
            name
          }
        }
      }
    }`,
  });

  return {
    props: {
      projectData: data.marketStats[0] || null,
    },
  };
};
