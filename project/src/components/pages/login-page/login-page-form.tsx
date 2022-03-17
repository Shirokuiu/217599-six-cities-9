import React from 'react';
import { useNavigate } from 'react-router-dom';

import LoginPageEmailControl from 'src/components/pages/login-page/login-page-email-control';
import LoginPagePasswordControl from 'src/components/pages/login-page/login-page-password-control';
import { LoginPageFormKey } from 'src/types/login-page';
import { buildDefaultForm } from 'src/components/pages/login-page/helpers/build-default-form';
import { useAppDispatch } from 'src/hooks';
import { AppRoutingPath } from 'src/types/app';
import { login } from 'src/store/api-actions/user/user';

function LoginPageForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const form = buildDefaultForm();

  const handleFormChange = ({ key, value }: { key: LoginPageFormKey; value: string }) => {
    form[key] = value;
  };

  const handleSubmitForm = async (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();

    await dispatch(login(form));

    navigate(AppRoutingPath.Index);
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
