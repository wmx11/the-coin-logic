export const isDev = process.env.NODE_ENV !== 'production';

export const resolveStringInputToResult = (input: string, metric: number) => {
  const stringInput = input.toString();
  if (stringInput.includes('%')) {
    const percentage = parseFloat(stringInput);
    return metric * (1 + percentage / 100);
  }
  const number = parseFloat(stringInput);
  return number || 0;
};
