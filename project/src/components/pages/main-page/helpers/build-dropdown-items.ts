import { DropdownItem } from 'src/types/dropdown';
import { MainPageSortOfferType } from 'src/types/main-page';
import { DEFAULT_SORTING_OFFER_TYPE } from 'src/components/pages/main-page/constants/constants';

const sortingTypes = [
  MainPageSortOfferType.Popular,
  MainPageSortOfferType.PriceDown,
  MainPageSortOfferType.PriceUp,
  MainPageSortOfferType.RatedUp,
];

export const buildDropdownItems = (
  activeSortingType: MainPageSortOfferType = DEFAULT_SORTING_OFFER_TYPE,
): DropdownItem[] =>
  sortingTypes.map((sortingType: MainPageSortOfferType, idx: number) => ({
    id: idx + 1,
    text: sortingType,
    value: sortingType,
    isActive: sortingType === activeSortingType,
  }));
