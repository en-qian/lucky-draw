export const getRandomValue = <T>(array: T[]) => {
  const index = Math.floor(Math.random() * array.length);

  return array[index];
};
