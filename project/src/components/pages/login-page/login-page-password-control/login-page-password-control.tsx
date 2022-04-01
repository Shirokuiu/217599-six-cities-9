import { useState } from 'react';

import { InputControlType, OnInputChangeProps } from 'src/types/input-control';
import InputControl from 'src/components/shared/input-control/input-control';
import { LoginPagePasswordControlProps } from 'src/types/login-page';
import { validatePassword } from 'src/components/pages/login-page/helpers/validate-password';
import { makePasswordErrorMsg } from 'src/components/pages/login-page/helpers/make-password-error-msg';

function LoginPagePasswordControl({
  onPasswordChange = () => undefined,
}: LoginPagePasswordControlProps) {
  const [password, setPassword] = useState<string>('');

  const handlePasswordChange = ({ value, target }: OnInputChangeProps) => {
    setPassword(value);
    onPasswordChange(value);

    if (!validatePassword(value)) {
      target.setCustomValidity(makePasswordErrorMsg(value));

      return;
    }

    target.setCustomValidity('');
  };

  return (
    <InputControl
      value={password}
      type={InputControlType.Password}
      name="password"
      placeholder="Password"
      isRequired
      onInputChange={handlePasswordChange}
    />
  );
}

export default LoginPagePasswordControl;
