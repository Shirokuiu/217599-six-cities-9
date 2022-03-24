import { AuthorizationStatus } from 'src/types/auth';
import { User } from 'src/types/user';
import UserLoggedIn from 'src/components/shared/user-logged-in/user-logged-in';
import UserLoggedOut from 'src/components/shared/user-logged-out/user-logged-out';

export const switchUserComponent = (
  authStatus: AuthorizationStatus,
  onLogoutClick: () => void,
  onFavoriteNavigate: () => void,
  me?: User,
): JSX.Element => {
  switch (authStatus) {
    case AuthorizationStatus.Auth:
      return (
        <UserLoggedIn
          user={me}
          onLogoutClick={onLogoutClick}
          onFavoriteNavigate={onFavoriteNavigate}
        />
      );
    case AuthorizationStatus.NoAuth:
      return <UserLoggedOut />;
    default:
      return <UserLoggedOut />;
  }
};
