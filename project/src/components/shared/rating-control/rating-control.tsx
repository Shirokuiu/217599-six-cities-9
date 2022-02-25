import { buildFormRating } from 'src/helpers/build-form-rating';
import { ChangeEvent, Fragment } from 'react';
import { FormRatingProps } from 'src/types/form-rating';

function RatingControl({ onRatingChange = () => undefined }: FormRatingProps) {
  const formRatingItems = buildFormRating();

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onRatingChange(evt.target.value);
  };

  return (
    <div className="reviews__rating-form form__rating">
      {formRatingItems.map(({ value, id, labelTitle }) => (
        <Fragment key={id}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={value}
            id={id}
            type="radio"
            onChange={handleRatingChange}
          />
          <label
            htmlFor={id}
            className="reviews__rating-label form__rating-label"
            title={labelTitle}
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
}

export default RatingControl;
