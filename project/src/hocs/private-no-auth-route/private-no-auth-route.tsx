import { Navigate, useLocation } from 'react-router-dom';

import { PrivateRouteProps } from 'src/types/private-route';
import { useAppSelector } from 'src/hooks';
import { AuthorizationStatus } from 'src/types/auth';

function PrivateNoAuthRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const location = useLocation();
  const locationState = location.state as { from: string };

  return authorizationStatus === AuthorizationStatus.NoAuth ? (
    children
  ) : (
    <Navigate to={locationState.from} />
  );
}

export default PrivateNoAuthRoute;
