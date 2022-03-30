import { useAppDispatch, useAppSelector } from 'src/hooks';
import { logout } from 'src/store/user-process/api-actions';
import UserBlock from 'src/components/shared/user-block/user-block';

function FavoritesPageUserBlock() {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const me = useAppSelector((state) => state.USER.me);
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
