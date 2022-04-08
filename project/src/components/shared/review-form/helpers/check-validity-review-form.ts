import {
  MAX_CHARACTER_LENGTH,
  MIN_CHARACTER_LENGTH
} from 'src/components/shared/review-form/constants/constants';

export const checkValidityReviewForm = (
  controlValue: { rating?: string; textareaValue?: string },
  cb: (isValid: boolean) => void,
): void => {
  const { rating, textareaValue } = controlValue;

  if (
    !rating ||
    (textareaValue && textareaValue.trim().length < MIN_CHARACTER_LENGTH) ||
    (textareaValue && textareaValue.trim().length > MAX_CHARACTER_LENGTH) ||
    !textareaValue?.trim().length
  ) {
    cb(false);

    return;
  }

  cb(true);
};
