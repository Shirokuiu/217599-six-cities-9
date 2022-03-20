import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Tabs from 'src/components/shared/tabs/tabs';
import { buildLocationTabs } from 'src/components/pages/main-page/helpers/build-location-tabs';
import { parseSearchParams } from 'src/helpers/parse-search-params';
import { Tab } from 'src/types/tabs';
import { DEFAULT_LOCATION_TAB_NAME } from 'src/components/pages/main-page/constants/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { LocationTabSearchParam } from 'src/types/main-page';
import { setCurrentCity } from 'src/store/main-page-process/main-page-process';

const locationTabs: Tab[] = buildLocationTabs();
let prevCityName = 'unknown';

function MainPageLocationTabs() {
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

    // NOTE Из-за того, что groupedCity изменяется срабатывает setCurrentCity
    // который в свою очередь переписывает массив currentCity
    // и за-за этого перерендеривается весь список предложений
    // при нажатии на - Добавить в избранное/убрать
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
    <Tabs
      tabs={locationTabs}
      renderTabContent={(tabText: string) => (
        <Link
          to={{
            search: `country=${tabText}`,
          }}
          className={[
            'locations__item-link',
            'tabs__item',
            parsedSearchParams.country === tabText && 'tabs__item--active',
          ].join(' ')}
        >
          <span>{tabText}</span>
        </Link>
      )}
    />
  );
}

export default MainPageLocationTabs;
