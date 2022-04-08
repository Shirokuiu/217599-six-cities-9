import { ChangeEvent } from 'react';

import { TextareaProps } from 'src/types/textarea';

function TextareaControl({
  id,
  name,
  placeholder,
  defaultValue,
  isDisabled = false,
  onTextareaValueChange = () => undefined,
}: TextareaProps) {
  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    onTextareaValueChange(evt.target.value);
  };

  return (
    <textarea
      className="reviews__textarea form__textarea"
      id={id ?? 'textarea'}
      value={defaultValue ?? ''}
      name={name ?? 'textarea'}
      placeholder={placeholder ?? 'Type some text'}
      onChange={handleTextareaChange}
      data-testid="textarea"
      disabled={isDisabled}
    />
  );
}

export default TextareaControl;
