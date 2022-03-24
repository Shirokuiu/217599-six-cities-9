import { GroupedCity } from 'src/types/main-page';

export const filterCityByEmptyOffers = (favorites: GroupedCity[]) =>
  favorites.filter(({ offers }) => offers.length !== 0);
