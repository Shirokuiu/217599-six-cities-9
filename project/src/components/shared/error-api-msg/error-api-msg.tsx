import { ErrorApiMsgProps } from 'src/types/error-api-msg';

function ErrorApiMsg({ msg = 'Server error' }: ErrorApiMsgProps) {
  return <div>{msg}</div>;
}

export default ErrorApiMsg;
