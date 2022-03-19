import { Offer } from 'src/types/offer';

export type OfferPreviewProps = {
  offer: Offer;
  onImgMouseEnter?: (offer: Offer) => void;
  onImgMouseLeave?: () => void;
  onToggleBookmark?: (isActive: boolean) => void;
};
