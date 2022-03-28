import { useEffect } from 'react';

import MainPageLocationTabsWrap from 'src/components/pages/main-page/main-page-location-tabs-wrap';
import { useAppDispatch } from 'src/hooks';
import MainPageHeader from 'src/components/pages/main-page/main-page-header';
import { getOffers } from 'src/store/main-page-process/api-actions';
import {
  clearState,
  groupCitiesAction,
} from 'src/store/main-page-process/reducer/main-page-process';
import MainPageOffersContainer from 'src/components/pages/main-page/main-page-offers-container';

function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getOffers());
      dispatch(groupCitiesAction());
    })();

    return () => {
      dispatch(clearState());
    };
  }, []);

  return (
    <div className="page page--gray page--main">
      <MainPageHeader />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <MainPageLocationTabsWrap />
        <MainPageOffersContainer />
      </main>
    </div>
  );
}

export default MainPage;
