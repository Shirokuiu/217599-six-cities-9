import { useAppDispatch, useAppSelector } from 'src/hooks';
import { logout } from 'src/store/user-process/api-actions/api-actions';
import UserBlock from 'src/components/shared/user-block/user-block';
import { getAuthorizationStatus, getMe } from 'src/store/user-process/selectors';

function FavoritesPageUserBlock() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const me = useAppSelector(getMe);
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <UserBlock
      authorizationStatus={authorizationStatus}
      me={me}
      onLogoutClick={handleLogoutClick}
    />
  );
}

export default FavoritesPageUserBlock;
