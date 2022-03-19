import { Offer } from 'src/types/offer';
import { GroupedCity } from 'src/types/main-page';

export type InitialState = {
  offers: Offer[];
  groupedCities: GroupedCity[];
  currentCity?: GroupedCity;
  currentOffer?: Offer;
};
