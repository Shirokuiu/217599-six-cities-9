import { AuthorizationStatus } from 'src/types/auth';
import { PropsWithChildren } from 'react';

export type PrivateRouteProps = PropsWithChildren<{
  authorizationStatus: AuthorizationStatus;
}>;
