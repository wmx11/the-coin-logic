import axios from 'axios';
import AddYourProject from 'components/AddYourProject';
import Meta from 'components/Meta';
import UpcomingProjectsTable from 'components/ProjectsTable/UpcomingProjectsTable';
import { DataForUpcomingProjectsTable } from 'data/api/utils/transformDataForCharts';
import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import routes from 'routes';

type UpcomingProjectsType = {
  projects: DataForUpcomingProjectsTable[];
};

const index: FC<UpcomingProjectsType> = ({ projects }) => {
  return (
    <>
      <Meta
        title="All Upcoming Projects | Coin Logic"
        description="Explore all upcoming projects listed on TheCoinLogic. Vote for your favorite gems, get them to the top of the list!"
      />
      <UpcomingProjectsTable projects={projects} />
      <AddYourProject />
    </>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { data },
  } = await axios.post(routes.api.data.upcoming);

  return {
    props: {
      projects: data?.data ?? null,
    },
  };
};
