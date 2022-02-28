import Tabs from 'src/components/shared/tabs/tabs';
import { buildLocationTabs } from 'src/components/pages/main-page/helpers/build-location-tabs';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { parseSearchParams } from 'src/helpers/parseSearchParams';

function MainPageLocationTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const locationTabs = buildLocationTabs();

  useEffect(() => {
    if (!parseSearchParams(searchParams).country) {
      setSearchParams({ country: 'Paris' });
    }
  }, []);

  return <Tabs tabs={locationTabs} />;
}

export default MainPageLocationTabs;
