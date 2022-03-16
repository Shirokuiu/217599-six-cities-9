import React from 'react';

import { InputControlProps, InputControlType } from 'src/types/input-control';

function InputControl({
  value,
  type = InputControlType.Text,
  name = 'input',
  isRequired = false,
  placeholder = 'Введите текст',
  onInputChange = () => undefined,
}: InputControlProps) {
  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange({ value: evt.target.value, target: evt.target });
  };

  return (
    <input
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      required={isRequired}
      onChange={handleInputChange}
      className="login__input form__input"
    />
  );
}

export default InputControl;
