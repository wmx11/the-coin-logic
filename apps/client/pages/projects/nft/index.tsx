import axios from 'axios';
import AddYourProject from 'components/AddYourProject';
import Meta from 'components/Meta';
import NFTProjectsTable from 'components/ProjectsTable/NFTProjectsTable';
import { DataForNFTProjects } from 'data/api/utils/transformDataForCharts';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import routes from 'routes';

type NftProjectsType = {
  projects: DataForNFTProjects[];
};

const index: FC<NftProjectsType> = ({ projects }) => {
  return (
    <>
      <Meta
        title="All NFT Projects | Coin Logic"
        description="Explore all NFT projects listed on TheCoinLogic. Sort by volume, floor price, holdings. See community sentiment, member counts and more!."
      />
      <NFTProjectsTable projects={projects} />
      <AddYourProject />
    </>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { data },
  } = await axios.post(routes.api.data.nft);

  return {
    props: {
      projects: data?.data ?? null,
    },
  };
};
