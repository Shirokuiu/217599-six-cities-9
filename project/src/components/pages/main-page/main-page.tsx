import { useEffect } from 'react';

import MainPageLocationTabs from 'src/components/pages/main-page/main-page-location-tabs';
import { useAppDispatch } from 'src/hooks';
import { groupCities } from 'src/store/actions/actions';
import MainPageSortOffers from 'src/components/pages/main-page/main-page-sort-offers';
import MainPageOffersList from 'src/components/pages/main-page/main-page-offers-list';
import MainPagePlacesFound from 'src/components/pages/main-page/main-page-places-found';
import MainPageMap from 'src/components/pages/main-page/main-page-map';
import { fetchOffers } from 'src/store/actions/api-actions';
import MainPageHeader from 'src/components/pages/main-page/main-page-header';

function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchOffers());
      dispatch(groupCities());
    })();
  }, []);

  return (
    <div className="page page--gray page--main">
      <MainPageHeader />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <MainPageLocationTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <MainPagePlacesFound />
              <MainPageSortOffers />
              <MainPageOffersList />
            </section>
            <MainPageMap />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
