const toLocaleString = (number?: number) => {
  if (!number) {
    return 0;
  }

  if (number > -1 && number < 1) {
    return number.toFixed(3);
  }

  return number.toLocaleString().length < 25 ? number.toLocaleString() : Math.floor(number);
};

export default toLocaleString;
