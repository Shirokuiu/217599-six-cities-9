import { createAsyncThunk } from '@reduxjs/toolkit';

import { ActionType } from 'src/store/offer-page-process/action-type';
import HotelsService from 'src/services/hotels-service/hotels-service';
import {
  addComment,
  setComments,
  setNearOffers,
  setOffer,
  toggleCommentsStatus,
  toggleOfferStatus
} from 'src/store/offer-page-process/reducer/offer-page-process';
import { CommentsStatus, OfferStatus } from 'src/types/offer-page-process';
import FavoritesService from 'src/services/favorites-service/favorites-service';
import CommentsService from 'src/services/comments/comments-service';
import { CommentBody } from 'src/types/comments-service';

export const getOffer = createAsyncThunk(
  ActionType.GetOffer,
  async (offerId: number, { dispatch }) => {
    dispatch(toggleOfferStatus(OfferStatus.Loading));

    try {
      const data = await HotelsService.getOffer(offerId);

      dispatch(setOffer(data));
    } catch (e) {
      dispatch(toggleOfferStatus(OfferStatus.NotFound));
    }
  },
);

export const apiSetFavoriteOffer = createAsyncThunk(
  ActionType.ApiSetFavoriteOffer,
  async (offerId: number, { dispatch }) => {
    await FavoritesService.set(offerId);
  },
);

export const apiRemoveFavoriteOffer = createAsyncThunk(
  ActionType.ApiRemoveFavoriteOffer,
  async (offerId: number, { dispatch }) => {
    await FavoritesService.remove(offerId);
  },
);

export const getComments = createAsyncThunk(
  ActionType.GetComments,
  async (offerId: number, { dispatch }) => {
    dispatch(toggleCommentsStatus(CommentsStatus.Loading));

    const data = await CommentsService.get(offerId);

    dispatch(setComments(data));
  },
);

export const apiAddComment = createAsyncThunk(
  ActionType.ApiAddComment,
  async (
    {
      offerId,
      body,
      resolveCb = () => undefined,
      rejectCb = () => undefined,
    }: { offerId: number; body: CommentBody; resolveCb?: () => void; rejectCb?: () => void },
    { dispatch },
  ) => {
    try {
      const data = await CommentsService.add(offerId, body);

      dispatch(addComment(data));

      resolveCb();
    } catch (e) {
      rejectCb();
    }
  },
);

export const getNearOffers = createAsyncThunk(
  ActionType.GetNearOffers,
  async (offerId: number, { dispatch }) => {
    const data = await HotelsService.getNearOffers(offerId);

    dispatch(setNearOffers(data));
  },
);
