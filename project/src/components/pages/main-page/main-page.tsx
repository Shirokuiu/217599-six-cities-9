import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { AppRoutingPath } from 'src/types/app';
import MainPageLocationTabs from 'src/components/pages/main-page/main-page-location-tabs';
import MainPageOffersList from 'src/components/pages/main-page/main-page-offers-list';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { groupCities, setCurrentCity } from 'src/store/actions/actions';
import { parseSearchParams } from 'src/helpers/parse-search-params';
import { LocationTabSearchParam } from 'src/types/main-page-location-tabs';
import MainPageMap from 'src/components/pages/main-page/main-page-map';

function MainPage() {
  const [searchParams] = useSearchParams({});
  const { currentCity, groupedCities } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(groupCities());
  }, []);

  useEffect(() => {
    const parsedSearchParams =
      parseSearchParams<LocationTabSearchParam>(searchParams);

    if (groupedCities.length) {
      dispatch(setCurrentCity(parsedSearchParams.country));
    }
  }, [searchParams, groupedCities]);

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
              <b className="places__found">
                {currentCity?.offers.length ?? 0} places to stay in Amsterdam
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <MainPageOffersList offers={currentCity?.offers ?? []} />
            </section>
            <MainPageMap offers={currentCity?.offers ?? []} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
