import { AuthorizationStatus } from 'src/types/auth';

export type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};
