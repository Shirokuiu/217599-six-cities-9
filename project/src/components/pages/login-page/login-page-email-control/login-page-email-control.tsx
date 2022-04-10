import { useState } from 'react';

import { InputControlType, OnInputChangeProps } from 'src/types/input-control';
import InputControl from 'src/components/shared/input-control/input-control';
import { LoginPageEmailControlProps } from 'src/types/login-page';
import { validateEmail } from 'src/components/pages/login-page/helpers/validate-email';
import { makeMailErrorMsg } from 'src/components/pages/login-page/helpers/make-mail-error-msg';

function LoginPageEmailControl({ onEmailChange = () => undefined }: LoginPageEmailControlProps) {
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = ({ value, target }: OnInputChangeProps) => {
    setEmail(value);
    onEmailChange(value);

    if (validateEmail(value)) {
      target.setCustomValidity(makeMailErrorMsg(value));

      return;
    }

    target.setCustomValidity('');
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
