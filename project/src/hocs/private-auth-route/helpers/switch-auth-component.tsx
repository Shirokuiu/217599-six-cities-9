import { Navigate } from 'react-router-dom';

import { AuthorizationStatus } from 'src/types/auth';
import { AppRoutingPath } from 'src/types/app';

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
      return <div>Loading...</div>;
    case AuthorizationStatus.Auth:
      return children;
    default:
      return <Navigate to={AppRoutingPath.Login} state={state} />;
  }
};
