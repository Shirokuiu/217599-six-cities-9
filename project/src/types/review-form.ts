export type ReviewFormProps = {
  onFormSubmit?: (formData: FormData) => void;
};

export type FormData = {
  comment: string;
  rating: number;
};
