import { useLocation } from 'react-router-dom';

import { PrivateRouteProps } from 'src/types/private-route';
import { useAppSelector } from 'src/hooks';
import { switchAuthComponent } from 'src/hocs/private-auth-route/helpers/switch-auth-component';
import { getAuthorizationStatus } from 'src/store/user-process/selectors';

function PrivateAuthRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const location = useLocation();

  return switchAuthComponent(authorizationStatus, location.pathname, children);
}

export default PrivateAuthRoute;
