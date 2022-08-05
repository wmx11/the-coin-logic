export type ProjectsCount = {
  projectsCount: number;
};

export type ProjectType = {
  name: string;
  slug: string;
  network: {
    name: string;
    logo: {
      url: string;
    };
  };
  pairToken: {
    name: string;
  }[];
  logo: {
    url: string;
  };
  tags: {
    name: string;
  }[];
};

export type ProjectWithMarketDataType = {
  price: number;
  marketCap: number;
  project: ProjectType;
};
