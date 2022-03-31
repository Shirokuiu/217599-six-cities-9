import { switchUserComponent } from 'src/components/shared/user-block/helpers/switch-user-component';
import { UserBlockProps } from 'src/types/user-block';

function UserBlock({ authorizationStatus, me, onLogoutClick = () => undefined }: UserBlockProps) {
  return (
    <ul className="header__nav-list" data-testid="nav-list">
      {switchUserComponent(authorizationStatus, onLogoutClick, me)}
    </ul>
  );
}

export default UserBlock;
