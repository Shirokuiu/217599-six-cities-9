export const checkValidityReviewForm = (
  controlValue: { rating?: string; textareaValue?: string },
  cb: (isValid: boolean) => void,
): void => {
  const { rating, textareaValue } = controlValue;

  // NOTE Пока оставляю проверку на пустой комментарий | пустой рейтинг (потом приведу с требованием ТЗ)
  if (!rating || !textareaValue?.trim().length) {
    cb(false);

    return;
  }

  cb(true);
};
