import { useAppDispatch, useAppSelector } from 'src/hooks';
import { logout } from 'src/store/user-process/api-actions';
import UserBlock from 'src/components/shared/user-block/user-block';
import { clearStore } from 'src/store/main-page-process/main-page-process';

function MainPageUserBlock() {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const me = useAppSelector((state) => state.USER.me);
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  const handleFavoriteNavigate = () => {
    dispatch(clearStore());
  };

  return (
    <UserBlock
      authorizationStatus={authorizationStatus}
      me={me}
      onLogoutClick={handleLogoutClick}
      onFavoriteNavigate={handleFavoriteNavigate}
    />
  );
}

export default MainPageUserBlock;
