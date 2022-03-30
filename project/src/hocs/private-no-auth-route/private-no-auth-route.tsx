import { PrivateRouteProps } from 'src/types/private-route';
import { useAppSelector } from 'src/hooks';
import { switchNoAuthComponent } from 'src/hocs/private-no-auth-route/helpers/switch-no-auth-component';

function PrivateNoAuthRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);

  return switchNoAuthComponent(authorizationStatus, children);
}

export default PrivateNoAuthRoute;
