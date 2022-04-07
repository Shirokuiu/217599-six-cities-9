import Rating from 'src/components/shared/rating/rating';
import { OfferPageDescriptionRatingProps } from 'src/types/offer-page';

function OfferPageDescriptionRating({ rating }: OfferPageDescriptionRatingProps) {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <Rating rate={rating} />
      </div>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>
  );
}

export default OfferPageDescriptionRating;
