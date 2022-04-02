import MainPageUserBlock from 'src/components/pages/main-page/main-page-user-block';
import LogoLink from 'src/components/shared/logo-link/logo-link';

function MainPageHeader() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <LogoLink isActive />
          </div>
          <nav className="header__nav">
            <MainPageUserBlock />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default MainPageHeader;
