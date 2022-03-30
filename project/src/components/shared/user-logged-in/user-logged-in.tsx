import { Link } from 'react-router-dom';

import { AppRoutingPath } from 'src/types/app';
import { UserLoggedInProps } from 'src/types/user-logged-in';

function UserLoggedIn({ user, onLogoutClick = () => undefined }: UserLoggedInProps) {
  return (
    <>
      <li className="header__nav-item user">
        <Link to={AppRoutingPath.Favorites} className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper" />
          <span className="header__user-name user__name" data-testid="user-name">
            {user?.email}
          </span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a onClick={onLogoutClick} className="header__nav-link">
          <span className="header__signout" data-testid="logged-signout">
            Sign out
          </span>
        </a>
      </li>
    </>
  );
}

export default UserLoggedIn;
