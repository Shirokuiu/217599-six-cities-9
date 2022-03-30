import { Navigate } from 'react-router-dom';

import { AuthorizationStatus } from 'src/types/auth';
import { AppRoutingPath } from 'src/types/app';
import Loader from 'src/components/shared/loader/loader';

export const switchAuthComponent = (
  authStatus: AuthorizationStatus,
  locationPathName: string,
  children: JSX.Element,
): JSX.Element => {
  const state = {
    from: locationPathName,
  };

  switch (authStatus) {
    case AuthorizationStatus.Unknown:
      return <Loader />;
    case AuthorizationStatus.Auth:
      return children;
    default:
      return <Navigate to={AppRoutingPath.Login} state={state} />;
  }
};
