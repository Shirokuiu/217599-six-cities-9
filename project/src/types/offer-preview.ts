import { Offer } from 'src/types/offer';

export type OfferPreviewProps = {
  offer: Offer;
  renderBookmark?: () => JSX.Element | undefined;
  onImgMouseEnter?: (offer: Offer) => void;
  onImgMouseLeave?: () => void;
};
