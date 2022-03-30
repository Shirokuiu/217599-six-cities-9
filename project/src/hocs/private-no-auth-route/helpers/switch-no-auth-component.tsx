import { Navigate } from 'react-router-dom';

import { AuthorizationStatus } from 'src/types/auth';
import Loader from 'src/components/shared/loader/loader';

export const switchNoAuthComponent = (
  authStatus: AuthorizationStatus,
  children: JSX.Element,
): JSX.Element | null => {
  switch (authStatus) {
    case AuthorizationStatus.Unknown:
      return <Loader />;
    case AuthorizationStatus.NoAuth:
      return children;
    default:
      return <Navigate to={-1 as unknown as string} replace />;
  }
};
