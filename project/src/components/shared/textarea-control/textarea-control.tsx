import { ChangeEvent } from 'react';

import { TextareaProps } from 'src/types/textarea';

function TextareaControl({
  id,
  name,
  placeholder,
  defaultValue,
  onTextareaValueChange = () => undefined,
}: TextareaProps) {
  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    onTextareaValueChange(evt.target.value);
  };

  return (
    <textarea
      className="reviews__textarea form__textarea"
      id={id ?? 'textarea'}
      name={name ?? 'textarea'}
      placeholder={placeholder ?? 'Type some text'}
      defaultValue={defaultValue ?? ''}
      onChange={handleTextareaChange}
    />
  );
}

export default TextareaControl;
