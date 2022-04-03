import { useAppDispatch, useAppSelector } from 'src/hooks';
import { logout } from 'src/store/user-process/api-actions/api-actions';
import UserBlock from 'src/components/shared/user-block/user-block';

function MainPageUserBlock() {
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

export default MainPageUserBlock;
