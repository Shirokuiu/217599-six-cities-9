export type TextareaProps = {
  id: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  onTextareaValueChange?: (value: string) => void;
};
