import { switchOfferPageDescriptionReviews } from 'src/components/pages/offer-page/helpers/switch-offer-page-description-reviews';
import { useAppSelector } from 'src/hooks';

function OfferPageDescriptionReviewsWrap() {
  const commentsStatus = useAppSelector((state) => state.OFFER_PAGE.commentsStatus);

  return switchOfferPageDescriptionReviews(commentsStatus);
}

export default OfferPageDescriptionReviewsWrap;
