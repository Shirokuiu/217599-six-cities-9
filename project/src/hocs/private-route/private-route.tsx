import { Navigate } from 'react-router-dom';

import { PrivateRouteProps } from 'src/types/private-route';
import { AuthorizationStatus } from 'src/types/auth';
import { AppRoutingPath } from 'src/types/app';

function PrivateRoute({
  authorizationStatus,
  children,
}: PrivateRouteProps): JSX.Element {
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoutingPath.Login} />
  );
}

export default PrivateRoute;
