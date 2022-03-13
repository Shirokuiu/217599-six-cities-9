import { Link } from 'react-router-dom';

import { AppRoutingPath } from 'src/types/app';

function UserLoggedIn() {
  return (
    <>
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoutingPath.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper" />
          <span className="header__user-name user__name">
            Oliver.conner@gmail.com
          </span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link" href="#">
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
}

export default UserLoggedIn;
