import MainPageUserBlock from 'src/components/pages/main-page/main-page-user-block';

function MainPageHeader() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </a>
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
