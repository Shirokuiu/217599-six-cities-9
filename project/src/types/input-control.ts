export type InputControlProps = {
  value: string;
  type?: InputControlType;
  name?: string;
  placeholder?: string;
  isRequired?: boolean;
  onInputChange?: (onInputChangeProps: OnInputChangeProps) => void;
};

export type OnInputChangeProps = {
  value: string;
  target: HTMLInputElement;
};

export enum InputControlType {
  Text = 'text',
  Email = 'email',
  Password = 'password',
}
