import FavoritesPageList from 'src/components/pages/favorites-page/favorites-page-list';
import { FavoritesPageProps } from 'src/types/favorites-page';
import { GroupedCity } from 'src/types/main-page';
import { groupOffersByCity } from 'src/helpers/group-offers-by-city';
import FavoritesPageHeader from 'src/components/pages/favorites-page/favorites-page-header';

function FavoritesPage({ offers }: FavoritesPageProps) {
  const groupedOffers: GroupedCity[] = groupOffersByCity(offers);

  return (
    <div className="page">
      <FavoritesPageHeader />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesPageList groupedOffers={groupedOffers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
