export type BtnProps = {
  isDisabled?: boolean;
  type?: BtnType;
  text?: string;
  classNames?: string[];
  onBtnClick?: () => void;
};

export enum BtnType {
  Button = 'button',
  Submit = 'submit',
}
