import { createSlice } from '@reduxjs/toolkit';

import { CommentsStatus, InitialState, OfferStatus } from 'src/types/offer-page-process';
import { NameSpace } from 'src/store/constants/constants';
import { ActionType } from 'src/store/offer-page-process/api-actions/action-type';
import { Offer } from 'src/types/offer';
import { Comment } from 'src/types/comment';

const initialState: InitialState = {
  offer: undefined,
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
    [ActionType.ClearState](state) {
      state.offerStatus = OfferStatus.Unknown;
      state.offer = undefined;
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
  clearState,
} = offerPageProcess.actions;
