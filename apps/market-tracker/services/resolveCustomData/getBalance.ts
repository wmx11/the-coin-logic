import Web3 from 'web3';

const getBalance = async (web3: Web3, address: string) => {
  const balance = await web3.eth.getBalance(address);
  return balance;
};

export default getBalance;
