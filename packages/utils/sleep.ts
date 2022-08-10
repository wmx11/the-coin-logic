const sleep = (time: number) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(`Sleep for ${time}`);
    }, time),
  );
};

export default sleep;
