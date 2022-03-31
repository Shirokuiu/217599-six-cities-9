import { GroupedCity } from 'src/types/main-page';
import { filterCityByEmptyOffers } from 'src/store/favorite-page-process/helpers/filter-city-by-empty-offers';
import { Offer } from 'src/types/offer';

export const unmarkFavorite = (favorites: GroupedCity[], id: number, offerId: number) => {
  const idxGroupedCity = favorites.findIndex((groupedCity) => groupedCity.id === id);
  let result = JSON.parse(JSON.stringify(favorites));

  result[idxGroupedCity].offers = result[idxGroupedCity].offers.filter(
    (offer: Offer) => offer.id !== offerId,
  );

  result = filterCityByEmptyOffers(result);

  return result;
};
