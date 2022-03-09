import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AppRoutingPath } from 'src/types/app';
import MainPageLocationTabs from 'src/components/pages/main-page/main-page-location-tabs';
import { useAppDispatch } from 'src/hooks';
import { groupCities } from 'src/store/actions/actions';
import MainPageSortOffers from 'src/components/pages/main-page/main-page-sort-offers';
import MainPageOffersList from 'src/components/pages/main-page/main-page-offers-list';
import MainPagePlacesFound from 'src/components/pages/main-page/main-page-places-found';
import MainPageMap from 'src/components/pages/main-page/main-page-map';

function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(groupCities());
  }, []);

  return (
    <div className="page page--gray page--main">
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
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoutingPath.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
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
