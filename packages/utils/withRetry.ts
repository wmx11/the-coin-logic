import sleep from './sleep';

const withRetry = async (callback: () => any) => {
  const MAX = 15;
  let retries = 0;

  const initWithRetry = async () => {
    try {
      retries = 0;
      return callback();
    } catch (error) {
      retries++;
      if (retries > MAX) {
        console.log('Too many retries. Exiting now.');
        console.log(error);
        return null;
      }
      console.log(`Retrying, ${retries}`);
      await sleep(2000);
      return initWithRetry();
    }
  };

  return initWithRetry();
};

export default withRetry;
