import FavoritesPageHeader from 'src/components/pages/favorites-page/favorites-page-header';
import FavoritesPageListContainer from 'src/components/pages/favorites-page/favorites-page-list-container';
import FavoritesPageFooter from 'src/components/pages/favorites-page/favorites-page-footer';

function FavoritesPageContent() {
  return (
    <div className="page">
      <FavoritesPageHeader />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesPageListContainer />
          </section>
        </div>
      </main>
      <FavoritesPageFooter />
    </div>
  );
}

export default FavoritesPageContent;