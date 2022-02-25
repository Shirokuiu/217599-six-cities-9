import { TextareaProps } from 'src/types/textarea';
import { ChangeEvent } from 'react';

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
