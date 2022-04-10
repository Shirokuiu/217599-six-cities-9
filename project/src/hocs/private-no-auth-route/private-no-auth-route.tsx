import { PrivateRouteProps } from 'src/types/private-route';
import { useAppSelector } from 'src/hooks';
import { switchNoAuthComponent } from 'src/hocs/private-no-auth-route/helpers/switch-no-auth-component';
import { getAuthorizationStatus } from 'src/store/user-process/selectors';

function PrivateNoAuthRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return switchNoAuthComponent(authorizationStatus, children);
}

export default PrivateNoAuthRoute;
