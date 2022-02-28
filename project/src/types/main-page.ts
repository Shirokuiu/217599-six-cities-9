import { Offer, OfferCity } from 'src/types/offer';

export type MainPageProps = {
  placesFound: number;
  offers: Offer[];
};

export type GroupedOffer = {
  id: number;
  city: OfferCity;
  offers: Offer[];
};
