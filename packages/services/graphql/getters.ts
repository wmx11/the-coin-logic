import request from './request';

export const getEnabledProjectsForTracking = async () => {
  const query = `
    {
      projects(where: { enabled: { equals: true } }) {
        id
        contractAddress
        pairAddress
        stableLiquidityPair {
          pairToken {
            address
          }
          address
        }
        network {
          url
        }
        customData
      }
    }
  `;

  const data = await request(query);

  if (data) {
    return data.projects;
  }

  return data;
};
