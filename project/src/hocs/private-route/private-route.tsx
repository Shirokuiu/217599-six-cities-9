import { Navigate } from 'react-router-dom';

import {
  AppRoutingPath,
  AuthorizationStatus,
  PrivateRouteProps,
} from 'src/types';

function PrivateRoute({
  authorizationStatus,
  children,
}: PrivateRouteProps): JSX.Element {
  return authorizationStatus === AuthorizationStatus.Auth ? (
    // NOTE - https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051#issuecomment-449628575
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  ) : (
    <Navigate to={AppRoutingPath.Login} />
  );
}

export default PrivateRoute;
