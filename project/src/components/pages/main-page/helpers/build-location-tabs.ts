import { LocationTabName } from 'src/types/main-page';
import { Tab } from 'src/types/tabs';
import { DEFAULT_LOCATION_TAB_NAME } from 'src/components/pages/main-page/constants/constants';

const locationTabNames: LocationTabName[] = [
  LocationTabName.PARIS,
  LocationTabName.COLOGNE,
  LocationTabName.BRUSSELS,
  LocationTabName.AMSTERDAM,
  LocationTabName.HAMBURG,
  LocationTabName.DUSSELDORF,
];

export const buildLocationTabs = (): Tab[] =>
  locationTabNames.map((locationName: string, idx: number) => ({
    id: idx + 1,
    text: locationName,
    isActive: locationName === DEFAULT_LOCATION_TAB_NAME,
  }));
