import { GroupedCity } from 'src/types/main-page';
import { filterCityByEmptyOffers } from 'src/store/favorite-page-process/helpers/filter-city-by-empty-offers';

export const unmarkFavorite = (favorites: GroupedCity[], id: number, offerId: number) => {
  const idxGroupedCity = favorites.findIndex((groupedCity) => groupedCity.id === id);
  let result = [...favorites];

  result[idxGroupedCity].offers = result[idxGroupedCity].offers.filter(
    (offer) => offer.id !== offerId,
  );

  result = filterCityByEmptyOffers(result);

  return result;
};
