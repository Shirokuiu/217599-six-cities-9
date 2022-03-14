import React from 'react';

import LoginPageEmailControl from 'src/components/pages/login-page/login-page-email-control';
import LoginPagePasswordControl from 'src/components/pages/login-page/login-page-password-control';
import { LoginPageFormKey } from 'src/types/login-page';
import { buildDefaultForm } from 'src/components/pages/login-page/helpers/build-default-form';

function LoginPageForm() {
  const form = buildDefaultForm();

  const handleFormChange = ({ key, value }: { key: LoginPageFormKey; value: string }) => {
    form[key] = value;
  };

  const handleSubmitForm = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();

    console.log(form);
  };

  return (
    <form className="login__form form" onSubmit={handleSubmitForm}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <LoginPageEmailControl
          onEmailChange={(value) => handleFormChange({ key: LoginPageFormKey.Email, value })}
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <LoginPagePasswordControl
          onPasswordChange={(value) => handleFormChange({ key: LoginPageFormKey.Password, value })}
        />
      </div>
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
}

export default LoginPageForm;
