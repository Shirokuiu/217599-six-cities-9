import { LoginPageFormBody } from 'src/types/login-page';

const DEFAULT_FORM: LoginPageFormBody = {
  email: '',
  password: '',
};

// NOTE Защита от мутаций
export const buildDefaultForm = (): LoginPageFormBody => DEFAULT_FORM;
