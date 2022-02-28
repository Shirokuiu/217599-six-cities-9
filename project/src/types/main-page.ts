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

export enum LocationTabName {
  PARIS = 'Paris',
  COLOGNE = 'Cologne',
  BRUSSELS = 'Brussels',
  AMSTERDAM = 'Amsterdam',
  HAMBURG = 'Hamburg',
  DUSSELDORF = 'Dusseldorf',
}
