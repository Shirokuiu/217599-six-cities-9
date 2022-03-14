import { useAppSelector } from 'src/hooks';
import { AuthorizationStatus } from 'src/types/auth';
import UserLoggedIn from 'src/components/shared/user-logged-in/user-logged-in';
import UserLoggedOut from 'src/components/shared/user-logged-out/user-logged-out';
import { User } from 'src/types/user';

const switchAuthUserComponent = (authStatus: AuthorizationStatus, me?: User): JSX.Element => {
  switch (authStatus) {
    case AuthorizationStatus.Auth:
      return <UserLoggedIn user={me} />;
    case AuthorizationStatus.NoAuth:
      return <UserLoggedOut />;
    default:
      return <UserLoggedOut />;
  }
};

function MainPageUserBlock() {
  const { authorizationStatus, me } = useAppSelector((state) => state);

  return <ul className="header__nav-list">{switchAuthUserComponent(authorizationStatus, me)}</ul>;
}

export default MainPageUserBlock;
