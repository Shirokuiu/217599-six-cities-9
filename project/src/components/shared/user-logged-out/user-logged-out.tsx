import { Link, useLocation } from 'react-router-dom';

import { AppRoutingPath } from 'src/types/app';

function UserLoggedOut() {
  const location = useLocation();

  return (
    <li className="header__nav-item">
      <Link
        to={AppRoutingPath.Login}
        state={{ from: location.pathname }}
        className="header__nav-link"
      >
        <span className="header__signout">Sign in</span>
      </Link>
    </li>
  );
}

export default UserLoggedOut;
