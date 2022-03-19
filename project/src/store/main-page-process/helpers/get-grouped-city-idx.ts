import { GroupedCity } from 'src/types/main-page';

export const getGroupedCityIdx = (groupedCities: GroupedCity[], groupedCityId: number): number =>
  groupedCities.findIndex(({ id }) => groupedCityId === id);
