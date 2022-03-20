import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { buildDropdownItems } from 'src/components/pages/main-page/helpers/build-dropdown-items';
import { DropdownItem } from 'src/types/dropdown';
import { parseSearchParams } from 'src/helpers/parse-search-params';
import { MainPageSortSearchParamType } from 'src/types/main-page';
import { DEFAULT_SORTING_OFFER_TYPE } from 'src/components/pages/main-page/constants/constants';
import MainPageSortOffers from 'src/components/pages/main-page/main-page-sort-offers';

const buildedDropdownItems: DropdownItem[] = buildDropdownItems();

function MainPageSortOffersWrap() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dropdownItems, setActiveDropdownItems] = useState<DropdownItem[]>(buildedDropdownItems);
  const parsedSearchParams = parseSearchParams<MainPageSortSearchParamType>(searchParams);

  useEffect(() => {
    if (!parsedSearchParams.sort) {
      setSearchParams({
        ...parsedSearchParams,
        sort: DEFAULT_SORTING_OFFER_TYPE,
      });

      return;
    }

    setActiveDropdownItems(buildDropdownItems(parsedSearchParams.sort));
  }, [searchParams]);

  const handleDropdownItemClick = ({ value }: DropdownItem) => {
    setSearchParams({ ...parsedSearchParams, sort: value });
  };

  return (
    <MainPageSortOffers
      dropdownItems={dropdownItems}
      onDropdownItemClick={handleDropdownItemClick}
    />
  );
}

export default MainPageSortOffersWrap;
