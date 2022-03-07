import { Offer, OfferCity } from 'src/types/offer';

export type GroupedCity = {
  id: number;
  city: OfferCity;
  offers: Offer[];
};

export type MainPageOffersListProps = {
  offers: Offer[];
};

export type MainPageSortSearchParamType = {
  sort: MainPageSortOfferType;
};

export enum MainPageSortOfferType {
  Popular = 'Popular',
  PriceDown = 'Price: low to high',
  PriceUp = 'Price: high to low',
  Rated = 'Top rated first',
}
