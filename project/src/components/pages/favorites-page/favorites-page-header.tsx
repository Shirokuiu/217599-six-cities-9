import LogoLink from 'src/components/shared/logo-link/logo-link';
import FavoritesPageUserBlock from 'src/components/pages/favorites-page/favorites-page-user-block';

function FavoritesPageHeader() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <LogoLink />
          </div>
          <nav className="header__nav">
            <FavoritesPageUserBlock />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default FavoritesPageHeader;
