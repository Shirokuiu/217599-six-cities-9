import { CommentsStatus } from 'src/types/offer-page-process';
import Loader from 'src/components/shared/loader/loader';
import OfferPageDescriptionReviews from 'src/components/pages/offer-page/offer-page-description-reviews';

export const switchOfferPageDescriptionReviews = (commentsStatus: CommentsStatus): JSX.Element => {
  switch (commentsStatus) {
    case CommentsStatus.Loading:
      return <Loader />;
    case CommentsStatus.Filled:
      return <OfferPageDescriptionReviews />;
    default:
      return <OfferPageDescriptionReviews />;
  }
};
