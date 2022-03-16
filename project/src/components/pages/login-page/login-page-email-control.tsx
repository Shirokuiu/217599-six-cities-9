import { useState } from 'react';

import { InputControlType, OnInputChangeProps } from 'src/types/input-control';
import InputControl from 'src/components/shared/input-control/input-control';
import { LoginPageEmailControlProps } from 'src/types/login-page';

function LoginPageEmailControl({ onEmailChange = () => undefined }: LoginPageEmailControlProps) {
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = ({ value }: OnInputChangeProps) => {
    setEmail(value);
    onEmailChange(value);
  };

  return (
    <InputControl
      value={email}
      type={InputControlType.Email}
      name="email"
      placeholder="Email"
      isRequired
      onInputChange={handleEmailChange}
    />
  );
}

export default LoginPageEmailControl;
