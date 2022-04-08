import { ChangeEvent, Fragment, useEffect } from 'react';

import { buildRatingItems } from 'src/components/shared/rating-control/helpers/build-rating-items';
import { FormRatingProps } from 'src/types/form-rating';

let formRatingItems = buildRatingItems();

function RatingControl({
  isDisabled = false,
  isReset = false,
  onRatingChange = () => undefined,
}: FormRatingProps) {
  useEffect(() => {
    if (isReset) {
      formRatingItems = buildRatingItems();
    }
  }, [isReset]);

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onRatingChange(evt.target.value);
  };

  return (
    <div className="reviews__rating-form form__rating">
      {formRatingItems.map(({ value, id, key, labelTitle }) => (
        <Fragment key={key}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={value}
            id={id}
            type="radio"
            disabled={isDisabled}
            onChange={handleRatingChange}
            data-testid="radio"
          />
          <label
            htmlFor={id}
            className="reviews__rating-label form__rating-label"
            title={labelTitle}
            data-testid="label"
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
}

export default RatingControl;
