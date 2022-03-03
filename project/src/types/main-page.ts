import { Offer, OfferCity } from 'src/types/offer';

export type GroupedCity = {
  id: number;
  city: OfferCity;
  offers: Offer[];
};

export type MainPageOffersListProps = {
  offers: Offer[];
};
