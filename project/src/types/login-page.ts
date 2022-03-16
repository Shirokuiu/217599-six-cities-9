export type LoginPageEmailControlProps = {
  onEmailChange?: (value: string) => void;
};

export type LoginPagePasswordControlProps = {
  onPasswordChange?: (value: string) => void;
};

export type LoginPageFormBody = {
  email: string;
  password: string;
};

export enum LoginPageFormKey {
  Email = 'email',
  Password = 'password',
}
