import { PropsWithChildren } from 'react';

export type PreviewImageWrapperProps = PropsWithChildren<{
  wrapperClass: WrapperClass;
  isPremium: boolean;
  onImgMouseEnter?: () => void;
}>;

export enum WrapperClass {
  OfferPreview = 'cities__image-wrapper place-card__image-wrapper',
  FavoritePreview = 'favorites__image-wrapper place-card__image-wrapper',
}
