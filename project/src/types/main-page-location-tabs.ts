export type MainPageLocationTabsProps = {
  onCountryChange?: (countryName: string) => void;
};

export type LocationTabSearchParam = {
  country: LocationTabName;
};

export enum LocationTabName {
  PARIS = 'Paris',
  COLOGNE = 'Cologne',
  BRUSSELS = 'Brussels',
  AMSTERDAM = 'Amsterdam',
  HAMBURG = 'Hamburg',
  DUSSELDORF = 'Dusseldorf',
}
