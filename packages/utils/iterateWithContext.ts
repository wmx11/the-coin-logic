export type Context = {
  iterations: number;
  iteration: number;
};

type Callback<T> = (context: Context & T) => Promise<(Context & T) | null>;

const iterateWithContext = async <T>(context: Context & T, cb: Callback<T>): Promise<void | null> => {
  if (!context || !cb) {
    throw new Error('Please provide a context and a callback');
  }

  if (context.iteration > context.iterations) {
    return new Promise((res) => res(null));
  }

  const cbContext = await cb(context);

  const newContext = { ...cbContext, iteration: cbContext.iteration + 1 };

  await iterateWithContext(newContext, cb);
};

export default iterateWithContext;
