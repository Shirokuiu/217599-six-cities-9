import { switchUserComponent } from 'src/components/shared/user-block/helpers/switch-user-component';
import { UserBlockProps } from 'src/types/user-block';

function UserBlock({
  authorizationStatus,
  me,
  onLogoutClick = () => undefined,
  onFavoriteNavigate = () => undefined,
}: UserBlockProps) {
  return (
    <ul className="header__nav-list">
      {switchUserComponent(authorizationStatus, onLogoutClick, onFavoriteNavigate, me)}
    </ul>
  );
}

export default UserBlock;
