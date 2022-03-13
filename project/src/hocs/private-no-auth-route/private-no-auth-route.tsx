import { PrivateRouteProps } from 'src/types/private-route';
import { useAppSelector } from 'src/hooks';
import { AuthorizationStatus } from 'src/types/auth';
import { Navigate } from 'react-router-dom';
import { AppRoutingPath } from 'src/types/app';

function PrivateNoAuthRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus,
  );

  return authorizationStatus === AuthorizationStatus.NoAuth ? (
    children
  ) : (
    <Navigate to={AppRoutingPath.Index} />
  );
}

export default PrivateNoAuthRoute;
