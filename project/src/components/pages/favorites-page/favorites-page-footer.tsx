import { Link } from 'react-router-dom';
import { AppRoutingPath } from 'src/types/app';

function FavoritesPageFooter() {
  return (
    <footer className="footer container">
      <Link to={AppRoutingPath.Index} className="footer__logo-link">
        <img
          className="footer__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width={64}
          height={33}
        />
      </Link>
    </footer>
  );
}

export default FavoritesPageFooter;
