import React from 'react';
import { gql } from '@apollo/client';
import { Container, Grid, Text } from '@mantine/core';

import Badges from '../../components/Badges';
import AboutProject from '../../components/pages/project/AboutProject';
import Announcements from '../../components/pages/project/Announcements';
import HoldersData from '../../components/pages/project/HoldersData';
import MarketData from '../../components/pages/project/MarketData';
import SocialAnalysisData from '../../components/pages/project/SocialAnalysisData';
import ProjectTitle from '../../components/ProjectTitle';
import TrackVitalsDisclaimer from '../../components/TrackVitalsDisclaimer';

import client from '../../data/apollo-client';

function project({ projectData }) {
  return (
    projectData && (
      <Container className="py-10">
        <div className="flex justify-between mb-8">
          <div>
            <ProjectTitle
              title={projectData.project.name}
              size="md"
              avatar={projectData.project.logo ? projectData.project.logo.url : ''}
            />
            <div>
              <Text color="dimmed" size="xs" className="mb-2">
                Tags:
              </Text>
              <Badges badges={projectData.project.tags} />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <Grid columns={12}>
            <Grid.Col span={8}>
              <AboutProject data={projectData.project} />
            </Grid.Col>
            <Grid.Col span={4}>
              <Announcements />
            </Grid.Col>
          </Grid>
        </div>

        <div className="my-16">
          <MarketData data={projectData} />
        </div>

        <div className="mb-16">
          <HoldersData />
        </div>

        <div className="mb-16">
          <SocialAnalysisData />
        </div>

        <TrackVitalsDisclaimer />
      </Container>
    )
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
      marketStats(where: { project: { slug: { equals: "${slug}" } } }, orderBy: { dateAdded: desc }, take: 1) {
        price
        marketCap
        liquidity
        pairPrice
        totalSupply
        dateAdded
        customData
        project {
          name
          website
          whitepaper
          contractAddress
          pairAddress
          network {
            name
            logo {
              url
            }
          }
          description
          twitter
          discord
          telegram
          reddit
          dateAdded
          logo {
            url
          }
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
