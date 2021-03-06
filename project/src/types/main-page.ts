import { Offer, OfferCity } from 'src/types/offer';
import { Tab } from 'src/types/tabs';
import { DropdownItem } from 'src/types/dropdown';

export type GroupedCity = {
  id: number;
  city: OfferCity;
  offers: Offer[];
};

export type MainPageSortSearchParamType = {
  sort: MainPageSortOfferType;
};

export enum MainPageSortOfferType {
  Popular = 'Popular',
  PriceDown = 'Price: low to high',
  PriceUp = 'Price: high to low',
  RatedUp = 'Top rated first',
}

export type LocationTabSearchParam = {
  country: LocationTabName;
};

export type MainPageLocationTabsProps = {
  locationTabs: Tab[];
  currentCountry: string;
};

export type MainPageSortOffersProps = {
  dropdownItems: DropdownItem[];
  onDropdownItemClick?: (dropdownItem: DropdownItem) => void;
};

export enum LocationTabName {
  PARIS = 'Paris',
  COLOGNE = 'Cologne',
  BRUSSELS = 'Brussels',
  AMSTERDAM = 'Amsterdam',
  HAMBURG = 'Hamburg',
  DUSSELDORF = 'Dusseldorf',
}
