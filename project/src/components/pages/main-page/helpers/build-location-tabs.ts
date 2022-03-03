import { Tab } from 'src/types/tabs';
import { LocationTabName } from 'src/types/main-page-location-tabs';

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
  }));
