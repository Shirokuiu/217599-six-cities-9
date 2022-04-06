import { Offer } from 'src/types/offer';
import { Comment } from 'src/types/comment';

export type InitialState = {
  offerStatus: OfferStatus;
  commentsStatus: CommentsStatus;
  comments: Comment[];
  nearOffers: Offer[];
  offer?: Offer;
  currentHoveredOffer?: Offer;
};

export enum OfferStatus {
  Unknown = 'unknown',
  Loading = 'loading',
  Filled = 'filled',
  NotFound = 'notFound',
}

export enum CommentsStatus {
  Unknown = 'unknown',
  Loading = 'loading',
  Filled = 'filled',
  Empty = 'empty',
}
