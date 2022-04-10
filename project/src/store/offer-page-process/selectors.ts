import { State } from 'src/types/state';
import { NameSpace } from 'src/store/constants/constants';

export const getSelectorOffer = (state: State) => state[NameSpace.OfferPage].offer;
export const getCurrentHoveredOffer = (state: State) =>
  state[NameSpace.OfferPage].currentHoveredOffer;
export const getNearOffers = (state: State) => state[NameSpace.OfferPage].nearOffers;
export const getOfferStatus = (state: State) => state[NameSpace.OfferPage].offerStatus;
export const getSelectorComments = (state: State) => state[NameSpace.OfferPage].comments;
export const getCommentsStatus = (state: State) => state[NameSpace.OfferPage].commentsStatus;
