import { switchOfferPageDescriptionReviews } from 'src/components/pages/offer-page/helpers/switch-offer-page-description-reviews';
import { useAppSelector } from 'src/hooks';
import { getCommentsStatus } from 'src/store/offer-page-process/selectors';

function OfferPageDescriptionReviewsWrap() {
  const commentsStatus = useAppSelector(getCommentsStatus);

  return switchOfferPageDescriptionReviews(commentsStatus);
}

export default OfferPageDescriptionReviewsWrap;
