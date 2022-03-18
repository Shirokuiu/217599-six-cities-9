import { useEffect } from 'react';

import MainPageLocationTabs from 'src/components/pages/main-page/main-page-location-tabs';
import { useAppDispatch } from 'src/hooks';
import MainPageHeader from 'src/components/pages/main-page/main-page-header';
import { getOffers } from 'src/store/main-page-process/api-actions';
import { groupCities } from 'src/store/main-page-process/main-page-process';
import MainPageOffersContainer from 'src/components/pages/main-page/main-page-offers-container';

function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getOffers());
      dispatch(groupCities());
    })();
  }, []);

  return (
    <div className="page page--gray page--main">
      <MainPageHeader />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <MainPageLocationTabs />
        <MainPageOffersContainer />
      </main>
    </div>
  );
}

export default MainPage;
