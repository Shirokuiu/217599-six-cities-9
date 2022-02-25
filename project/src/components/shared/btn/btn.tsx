import { BtnProps, BtnType } from 'src/types/btn';

function Btn({
  text,
  isDisabled,
  type,
  classNames,
  onBtnClick = () => undefined,
}: BtnProps) {
  return (
    <button
      className={[...(classNames ?? ''), 'button'].join(' ')}
      type={type ?? BtnType.Button}
      disabled={isDisabled ?? false}
      onClick={onBtnClick}
    >
      {text ?? 'button'}
    </button>
  );
}

export default Btn;
