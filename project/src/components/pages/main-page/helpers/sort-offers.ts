import { Offer } from 'src/types/offer';
import { MainPageSortOfferType } from 'src/types/main-page';
import { SORT_BY_DEFAULT } from 'src/components/pages/main-page/constants/constants';

export const sortOffers = ({
  offers,
  sortBy,
}: {
  offers: Offer[];
  sortBy: MainPageSortOfferType;
}): Offer[] =>
  [...offers].sort((a: Offer, b: Offer) => {
    switch (sortBy) {
      case MainPageSortOfferType.Popular:
        return SORT_BY_DEFAULT;
      case MainPageSortOfferType.PriceDown:
        return a.price - b.price;
      case MainPageSortOfferType.PriceUp:
        return b.price - a.price;
      case MainPageSortOfferType.RatedUp:
        return b.rating - a.rating;
      default:
        return SORT_BY_DEFAULT;
    }
  });
