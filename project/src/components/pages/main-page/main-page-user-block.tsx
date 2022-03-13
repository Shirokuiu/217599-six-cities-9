import { useAppSelector } from 'src/hooks';
import { AuthorizationStatus } from 'src/types/auth';
import UserLoggedIn from 'src/components/shared/user-logged-in/user-logged-in';
import UserLoggedOut from 'src/components/shared/user-logged-out/user-logged-out';

const switchAuthUserComponent = (
  authStatus: AuthorizationStatus,
): JSX.Element => {
  switch (authStatus) {
    case AuthorizationStatus.Auth:
      return <UserLoggedIn />;
    case AuthorizationStatus.NoAuth:
      return <UserLoggedOut />;
    default:
      return <UserLoggedOut />;
  }
};

function MainPageUserBlock() {
  const { authorizationStatus } = useAppSelector((state) => state);

  return (
    <ul className="header__nav-list">
      {switchAuthUserComponent(authorizationStatus)}
    </ul>
  );
}

export default MainPageUserBlock;
