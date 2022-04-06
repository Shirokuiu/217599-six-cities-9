import { Offer } from 'src/types/offer';

export type InitialState = {
  offerStatus: OfferStatus;
  offer?: Offer;
};

export enum OfferStatus {
  Unknown = 'unrnown',
  Loading = 'loading',
  Filled = 'filled',
  NotFound = 'notFound',
}
