import { Navigate } from 'react-router-dom';

import { AuthorizationStatus } from 'src/types/auth';
import { AppRoutingPath } from 'src/types/app';

export const switchAuthComponent = (
  authStatus: AuthorizationStatus,
  childern: JSX.Element,
): JSX.Element => {
  switch (authStatus) {
    case AuthorizationStatus.Unknown:
      return <div>Loading...</div>;
    case AuthorizationStatus.Auth:
      return childern;
    default:
      return <Navigate to={AppRoutingPath.Login} />;
  }
};
