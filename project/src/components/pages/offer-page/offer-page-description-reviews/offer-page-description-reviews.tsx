import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ReviewForm from 'src/components/shared/review-form/review-form';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import OfferPageDescriptionReview from 'src/components/pages/offer-page/offer-page-description-review/offer-page-description-review';
import { AuthorizationStatus } from 'src/types/auth';
import { FormData } from 'src/types/review-form';
import { apiAddComment } from 'src/store/offer-page-process/api-actions/api-actions';
import { Comment } from 'src/types/comment';
import { sortAndSliceComments } from 'src/components/pages/offer-page/helpers/sort-and-slice-comments';
import { getSelectorComments } from 'src/store/offer-page-process/selectors';
import { getAuthorizationStatus } from 'src/store/user-process/selectors';

function OfferPageDescriptionReviews() {
  const params = useParams<{ id: string }>();
  const comments = useAppSelector(getSelectorComments);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const [parsedComments, setParsedComments] = useState<Comment[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [isReset, setIsReset] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);

  useEffect(() => {
    const sortedComments = sortAndSliceComments(comments);

    setParsedComments(sortedComments);
  }, [comments]);

  const handleFormSubmit = async (formData: FormData) => {
    setDisabled(true);
    setErrorMsg(undefined);
    setIsReset(false);

    dispatch(
      apiAddComment({
        offerId: params.id ? +params.id : 0,
        body: formData,
        resolveCb() {
          setDisabled(false);
          setIsReset(true);
        },
        rejectCb() {
          setDisabled(false);
          setErrorMsg('An error occurred while sending the message. Please, try again');
        },
      }),
    );
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
        <ReviewForm
          isFormDisabled={disabled}
          isFormReset={isReset}
          onFormSubmit={handleFormSubmit}
        />
      )}
      {errorMsg && <div>{errorMsg}</div>}
    </section>
  );
}

export default OfferPageDescriptionReviews;
