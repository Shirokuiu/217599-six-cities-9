const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const getRandomCity = (): string => {
  const min = Math.ceil(0);
  const max = Math.floor(cities.length - 1);

  return cities[Math.floor(Math.random() * (max - min + 1)) + min];
};
