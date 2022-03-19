import { useAppDispatch, useAppSelector } from 'src/hooks';
import { AuthorizationStatus } from 'src/types/auth';
import UserLoggedIn from 'src/components/shared/user-logged-in/user-logged-in';
import UserLoggedOut from 'src/components/shared/user-logged-out/user-logged-out';
import { User } from 'src/types/user';
import { logout } from 'src/store/api-actions/user/user';

const switchAuthUserComponent = (
  authStatus: AuthorizationStatus,
  cb: () => void,
  me?: User,
): JSX.Element => {
  switch (authStatus) {
    case AuthorizationStatus.Auth:
      return <UserLoggedIn user={me} onLogoutClick={cb} />;
    case AuthorizationStatus.NoAuth:
      return <UserLoggedOut />;
    default:
      return <UserLoggedOut />;
  }
};

function MainPageUserBlock() {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const me = useAppSelector((state) => state.USER.me);
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <ul className="header__nav-list">
      {switchAuthUserComponent(authorizationStatus, handleLogoutClick, me)}
    </ul>
  );
}

export default MainPageUserBlock;
