export type TextareaProps = {
  id?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  isDisabled?: boolean;
  onTextareaValueChange?: (value: string) => void;
};
