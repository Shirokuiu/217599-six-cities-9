import { Link } from 'react-router-dom';
import { AppRoutingPath } from 'src/types/app';

export const switchLink = (isActive: boolean, children: JSX.Element): JSX.Element => {
  if (!isActive) {
    return (
      <Link to={AppRoutingPath.Index} className="header__logo-link">
        {children}
      </Link>
    );
  }

  return <a className="header__logo-link header__logo-link--active">{children}</a>;
};
