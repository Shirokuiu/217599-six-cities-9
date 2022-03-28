import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { buildLocationTabs } from 'src/components/pages/main-page/helpers/build-location-tabs';
import { parseSearchParams } from 'src/helpers/parse-search-params';
import { Tab } from 'src/types/tabs';
import { DEFAULT_LOCATION_TAB_NAME } from 'src/components/pages/main-page/constants/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { LocationTabSearchParam } from 'src/types/main-page';
import { setCurrentCity } from 'src/store/main-page-process/reducer/main-page-process';
import MainPageLocationTabs from 'src/components/pages/main-page/main-page-location-tabs';

const locationTabs: Tab[] = buildLocationTabs();

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

    if (parsedSearchParams.country && groupedCities.length) {
      dispatch(setCurrentCity(parsedSearchParams.country));
    }
  }, [searchParams.get('country'), groupedCities]);

  return (
    <MainPageLocationTabs locationTabs={locationTabs} currentCountry={parsedSearchParams.country} />
  );
}

export default MainPageLocationTabsWrap;
