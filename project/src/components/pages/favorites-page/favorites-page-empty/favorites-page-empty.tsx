import FavoritesPageHeader from 'src/components/pages/favorites-page/favorites-page-header/favorites-page-header';
import FavoritesPageFooter from 'src/components/pages/favorites-page/favorites-page-footer/favorites-page-footer';

function FavoritesPageEmpty() {
  return (
    <div className="page page--favorites-empty">
      <FavoritesPageHeader />

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description" data-testid="description">
                Save properties to narrow down search or plan your future trips.
              </p>
            </div>
          </section>
        </div>
      </main>
      <FavoritesPageFooter />
    </div>
  );
}

export default FavoritesPageEmpty;
