import ReviewForm from 'src/components/shared/review-form/review-form';
import { useAppSelector } from 'src/hooks';
import OfferPageDescriptionReview from 'src/components/pages/offer-page/offer-page-description-review';

function OfferPageDescriptionReviews() {
  const comments = useAppSelector((state) => state.OFFER_PAGE.comments);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.map((comment) => (
          <OfferPageDescriptionReview key={comment.id} comment={comment} />
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default OfferPageDescriptionReviews;
