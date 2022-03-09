import { Navigate } from 'react-router-dom';

import { PrivateRouteProps } from 'src/types/private-route';
import { AuthorizationStatus } from 'src/types/auth';
import { AppRoutingPath } from 'src/types/app';
import { useAppSelector } from 'src/hooks';

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus,
  );

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoutingPath.Login} />
  );
}

export default PrivateRoute;
