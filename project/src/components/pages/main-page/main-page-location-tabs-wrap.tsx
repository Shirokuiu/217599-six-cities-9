import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { buildLocationTabs } from 'src/components/pages/main-page/helpers/build-location-tabs';
import { parseSearchParams } from 'src/helpers/parse-search-params';
import { Tab } from 'src/types/tabs';
import { DEFAULT_LOCATION_TAB_NAME } from 'src/components/pages/main-page/constants/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { LocationTabSearchParam } from 'src/types/main-page';
import { setCurrentCity } from 'src/store/main-page-process/main-page-process';
import MainPageLocationTabs from 'src/components/pages/main-page/main-page-location-tabs';

const locationTabs: Tab[] = buildLocationTabs();
let prevCityName = 'unknown';

function MainPageLocationTabsWrap() {
  // NOTE Уточнить, как оптимизировать searchParams, который перерендеривает компонент на любое изменение строки, даже из другого компонента
  const [searchParams, setSearchParams] = useSearchParams({});
  const groupedCities = useAppSelector((state) => state.MAIN_PAGE.groupedCities);
  const dispatch = useAppDispatch();
  const parsedSearchParams = parseSearchParams<LocationTabSearchParam>(searchParams);

  useEffect(() => {
    if (!parsedSearchParams.country) {
      setSearchParams({
        ...parsedSearchParams,
        country: DEFAULT_LOCATION_TAB_NAME,
      });
    }

    // NOTE Из-за того, что groupedCity изменяется при
    // Добавлении/удланеии из избранного, срабатывает setCurrentCity
    // который в свою очередь переписывает массив currentCity
    // и за-за этого перерендеривается весь список предложений
    // в компоненте main-page-offers-list.
    // Чтобы этого избежать, завел системную переменную - prevCityName
    // которая позволит перерендеривать currentCity
    // только в том случае, когда это действительно нужно,
    // когда изменяется активная вкладка города
    if (
      prevCityName !== parsedSearchParams.country &&
      parsedSearchParams.country &&
      groupedCities.length
    ) {
      dispatch(setCurrentCity(parsedSearchParams.country));
      prevCityName = parsedSearchParams.country;
    }
  }, [searchParams.get('country'), groupedCities]);

  return (
    <MainPageLocationTabs locationTabs={locationTabs} currentCountry={parsedSearchParams.country} />
  );
}

export default MainPageLocationTabsWrap;