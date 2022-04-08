export type ReviewFormProps = {
  onFormSubmit?: (formData: FormData) => void;
  isFormDisabled?: boolean;
  isFormReset?: boolean;
};

export type FormData = {
  comment: string;
  rating: number;
};
