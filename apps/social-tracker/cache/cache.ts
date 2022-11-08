export const cache = new Map();

export const setCache = (key: string, value: Record<any, any>) => {
  cache.set(key, {
    ...value,
    destroy: setTimeout(() => {
      cache.delete(key);
    }, 5 * 60 * 1000),
  });
};
