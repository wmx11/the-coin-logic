const toDecimals = (number: number | string, decimals: number | string = 18) => {
  if (!number) {
    return 0;
  }

  return parseInt(number as string, 10) / 10 ** parseInt(decimals as string, 10);
};

export default toDecimals;
