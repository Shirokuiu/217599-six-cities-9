import { FormEvent, useEffect, useState } from 'react';

import RatingControl from 'src/components/shared/rating-control/rating-control';
import TextareaControl from 'src/components/shared/textarea-control/textarea-control';
import Btn from 'src/components/shared/btn/btn';
import { BtnType } from 'src/types/btn';
import { checkValidityReviewForm } from 'src/components/shared/review-form/helpers/check-validity-review-form';
import { calculateMinCharacters } from 'src/components/shared/review-form/helpers/calculate-min-characters';
import {
  MAX_CHARACTER_LENGTH,
  MIN_CHARACTER_LENGTH,
} from 'src/components/shared/review-form/constants/constants';
import { ReviewFormProps } from 'src/types/review-form';

function ReviewForm({
  isFormDisabled = false,
  isFormReset = false,
  onFormSubmit = () => undefined,
}: ReviewFormProps) {
  const [rating, setRating] = useState<string | undefined>(undefined);
  const [isDisabled, setDisabled] = useState<boolean>(true);
  const [textareaValue, setTextareaValue] = useState<string>('');

  useEffect(() => {
    if (isFormReset) {
      setRating(undefined);
      setTextareaValue('');
    }
  }, [isFormReset]);

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const comment = textareaValue;
    const parsedRating = rating ? +rating : 0;

    onFormSubmit({ comment, rating: parsedRating });
  };

  const handleRatingChange = (currentRating: string) => {
    setRating(currentRating);

    checkValidityReviewForm({ rating: currentRating, textareaValue }, (isValid) => {
      setDisabled(!isValid);
    });
  };

  const handleTextareaChange = (value: string) => {
    setTextareaValue(value);

    checkValidityReviewForm({ rating, textareaValue: value }, (isValid) => {
      setDisabled(!isValid);
    });
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmitForm}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingControl
        isDisabled={isFormDisabled}
        isReset={isFormReset}
        onRatingChange={handleRatingChange}
      />

      <TextareaControl
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={textareaValue}
        isDisabled={isFormDisabled}
        onTextareaValueChange={handleTextareaChange}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least{' '}
          <b className="reviews__text-amount">
            {calculateMinCharacters(textareaValue.trim().length)}/{MIN_CHARACTER_LENGTH} characters
          </b>
          , and max&nbsp;
          <b className="reviews__text-amount">
            {textareaValue.trim().length}/{MAX_CHARACTER_LENGTH} characters
          </b>
          .
        </p>
        <Btn
          classNames={['reviews__submit', 'form__submit']}
          type={BtnType.Submit}
          isDisabled={isDisabled || isFormDisabled}
          text="Submit"
        />
      </div>
    </form>
  );
}

export default ReviewForm;
