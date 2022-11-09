const config = {
  caller: '0x95fa0fe94d66e98e8ee009db8ee6efc5cf977092',
  receiver: '0xb1B3280238339807D746E0F2dec6b3F76E3575F7',
  initialChunks: 2000,
  chunks: 300, // Based on 1 block per 3 seconds over 10 minutes
  networks: [
    {
      name: 'Binance Smart Chain',
      slug: 'bsc',
      networkId: 56,
      rpc: 'https://rpc.ankr.com/bsc',
      logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=023',
      acceptedCurrencies: [
        {
          name: 'BUSD',
          apiId: 'busd',
          logo: 'https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=023',
          address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
          decimals: 18,
        },
      ],
    },
    {
      name: 'Polygon',
      slug: 'polygon',
      networkId: 137,
      rpc: 'https://rpc.ankr.com/polygon',
      logo: 'https://cryptologos.cc/logos/polygon-matic-logo.svg?v=023',
      acceptedCurrencies: [
        {
          name: 'USDC',
          apiId: 'usd-coin',
          logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=023',
          address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
          decimals: 6,
        },
      ],
    },
    {
      name: 'Avalanche',
      slug: 'avalanche',
      networkId: 43114,
      rpc: 'https://rpc.ankr.com/avalanche-c',
      logo: 'https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=023',
      acceptedCurrencies: [
        {
          name: 'USDC',
          apiId: 'usd-coin',
          logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=023',
          address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
          decimals: 6,
        },
      ],
    },
    {
      name: 'Fantom',
      slug: 'fantom',
      networkId: 250,
      rpc: 'https://rpc.ankr.com/fantom',
      logo: 'https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=023',
      acceptedCurrencies: [
        {
          name: 'USDC',
          apiId: 'usd-coin',
          logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=023',
          address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
          decimals: 6,
        },
      ],
    },
    {
      name: 'Ethereum',
      slug: 'ethereum',
      networkId: 1,
      rpc: 'https://rpc.ankr.com/eth',
      logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=023',
      acceptedCurrencies: [
        {
          name: 'USDT',
          apiId: 'tether',
          logo: 'https://cryptologos.cc/logos/tether-usdt-logo.svg?v=023',
          address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
          decimals: 6,
        },
      ],
    },
  ],
};

export default config;
