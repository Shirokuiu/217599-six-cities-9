import { Link } from 'react-router-dom';

import { LogoLinkProps } from 'src/types/logo-link';
import { AppRoutingPath } from 'src/types/app';

const switchLink = (isActive: boolean, children: JSX.Element): JSX.Element => {
  if (!isActive) {
    return (
      <Link to={AppRoutingPath.Index} className="header__logo-link">
        {children}
      </Link>
    );
  }

  return (
    <a className="header__logo-link header__logo-link--active">{children}</a>
  );
};

function LogoLink({ isActive = false }: LogoLinkProps) {
  return switchLink(
    isActive,
    <img
      className="header__logo"
      src="img/logo.svg"
      alt="6 cities logo"
      width={81}
      height={41}
    />,
  );
}

export default LogoLink;
