import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ReviewForm from 'src/components/shared/review-form/review-form';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import OfferPageDescriptionReview from 'src/components/pages/offer-page/offer-page-description-review';
import { AuthorizationStatus } from 'src/types/auth';
import { FormData } from 'src/types/review-form';
import { apiAddComment } from 'src/store/offer-page-process/api-actions/api-actions';
import { Comment } from 'src/types/comment';
import { sortAndSliceComments } from 'src/components/pages/offer-page/helpers/sort-and-slice-comments';

function OfferPageDescriptionReviews() {
  const params = useParams<{ id: string }>();
  const comments = useAppSelector((state) => state.OFFER_PAGE.comments);
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const dispatch = useAppDispatch();
  const [parsedComments, setParsedComments] = useState<Comment[]>([]);

  useEffect(() => {
    const sortedComments = sortAndSliceComments(comments);

    setParsedComments(sortedComments);
  }, [comments]);

  const handleFormSubmit = (formData: FormData) => {
    dispatch(apiAddComment({ offerId: params.id ? +params.id : 0, body: formData }));
  };

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {parsedComments.map((comment) => (
          <OfferPageDescriptionReview key={comment.id} comment={comment} />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && (
        <ReviewForm onFormSubmit={handleFormSubmit} />
      )}
    </section>
  );
}

export default OfferPageDescriptionReviews;