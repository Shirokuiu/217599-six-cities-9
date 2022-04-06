import LogoLink from 'src/components/shared/logo-link/logo-link';
import OfferPageUserBlock from 'src/components/pages/offer-page/offer-page-user-block';

function OfferPageHeader() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <LogoLink />
          </div>
          <nav className="header__nav">
            <OfferPageUserBlock />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default OfferPageHeader;
