import MainPagePlacesFound from 'src/components/pages/main-page/main-page-places-found';
import MainPageSortOffersWrap from 'src/components/pages/main-page/main-page-sort-offers-wrap';
import MainPageOffersList from 'src/components/pages/main-page/main-page-offers-list';
import MainPageMap from 'src/components/pages/main-page/main-page-map';

export function MainPageOffers() {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <MainPagePlacesFound />
          <MainPageSortOffersWrap />
          <MainPageOffersList />
        </section>
        <MainPageMap />
      </div>
    </div>
  );
}

export default MainPageOffers;
