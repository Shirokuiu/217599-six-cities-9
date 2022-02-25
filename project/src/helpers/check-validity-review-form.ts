export const checkValidityReviewForm = (
  controlValue: { rating?: string; textareaValue?: string },
  errorCb: () => void = () => undefined,
  successCb: () => void = () => undefined,
): void => {
  const { rating, textareaValue } = controlValue;

  // NOTE Пока оставляю проверку на пустой комментарий | пустой рейтинг (потом приведу с требованием ТЗ)
  if (!rating || !textareaValue?.trim().length) {
    errorCb();

    return;
  }

  successCb();
};
