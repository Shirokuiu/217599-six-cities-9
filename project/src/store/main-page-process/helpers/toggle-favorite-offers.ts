import { GroupedCity } from 'src/types/main-page';
import { Offer } from 'src/types/offer';

export const toggleFavoriteOffers = (
  idx: number,
  groupedCities: GroupedCity[],
  offerId: number,
  isFavorite: boolean,
): Offer[] =>
  groupedCities[idx].offers.map((offer) => ({
    ...offer,
    isFavorite: offerId === offer.id ? isFavorite : offer.isFavorite,
  }));
