import { createSlice } from '@reduxjs/toolkit';

import { CommentsStatus, InitialState, OfferStatus } from 'src/types/offer-page-process';
import { NameSpace } from 'src/store/constants/constants';
import { ActionType } from 'src/store/offer-page-process/action-type';
import { Offer } from 'src/types/offer';
import { Comment } from 'src/types/comment';

const initialState: InitialState = {
  offer: undefined,
  currentHoveredOffer: undefined,
  nearOffers: [],
  offerStatus: OfferStatus.Unknown,
  comments: [],
  commentsStatus: CommentsStatus.Unknown,
};

export const offerPageProcess = createSlice({
  name: NameSpace.OfferPage,
  initialState,
  reducers: {
    [ActionType.SetOffer](state, { payload: offer }: { payload: Offer }) {
      state.offerStatus = OfferStatus.Filled;
      state.offer = offer;
    },
    [ActionType.ToggleOfferStatus](state, { payload: offerStatus }: { payload: OfferStatus }) {
      state.offerStatus = offerStatus;
    },
    [ActionType.SetComments](state, { payload: comments }: { payload: Comment[] }) {
      state.comments = comments;
      state.commentsStatus = comments.length ? CommentsStatus.Filled : CommentsStatus.Empty;
    },
    [ActionType.ToggleCommentsStatus](
      state,
      { payload: commentsStatus }: { payload: CommentsStatus },
    ) {
      state.commentsStatus = commentsStatus;
    },
    [ActionType.AddComment](state, { payload: comments }: { payload: Comment[] }) {
      state.comments = comments;
    },
    [ActionType.SetNearOffers](state, { payload: nearOffers }: { payload: Offer[] }) {
      state.nearOffers = nearOffers;
    },
    [ActionType.ToggleHoverOffer](
      state,
      { payload: currentOffer }: { payload: Offer | undefined },
    ) {
      state.currentHoveredOffer = currentOffer;
    },
    [ActionType.MarkNearOffer](state, { payload: offerId }: { payload: number }) {
      const idx = state.nearOffers.findIndex(({ id }) => id === offerId);

      state.nearOffers[idx].isFavorite = true;
    },
    [ActionType.UnMarkNearOffer](state, { payload: offerId }: { payload: number }) {
      const idx = state.nearOffers.findIndex(({ id }) => id === offerId);

      state.nearOffers[idx].isFavorite = false;
    },
    [ActionType.MarkOffer](state) {
      (state.offer as Offer).isFavorite = true;
    },
    [ActionType.UnMarkOffer](state) {
      (state.offer as Offer).isFavorite = false;
    },
    [ActionType.ResetNearOffersFavorites](state) {
      state.nearOffers = state.nearOffers.map((offer) => ({
        ...offer,
        isFavorite: false,
      }));
    },
    [ActionType.ClearState](state) {
      state.offerStatus = OfferStatus.Unknown;
      state.offer = undefined;
      state.currentHoveredOffer = undefined;
      state.comments = [];
      state.commentsStatus = CommentsStatus.Unknown;
    },
  },
});

export const {
  setOffer,
  toggleOfferStatus,
  setComments,
  toggleCommentsStatus,
  addComment,
  setNearOffers,
  toggleHoverOffer,
  resetNearOffersFavorites,
  markNearOffer,
  unMarkNearOffer,
  markOffer,
  unMarkOffer,
  clearState,
} = offerPageProcess.actions;
