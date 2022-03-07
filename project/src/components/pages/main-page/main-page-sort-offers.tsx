import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SortDropdown from 'src/components/shared/sort-dropdown/sort-dropdown';
import { buildDropdownItems } from 'src/components/pages/main-page/helpers/build-dropdown-items';
import { DropdownItem } from 'src/types/dropdown';
import { parseSearchParams } from 'src/helpers/parse-search-params';
import { MainPageSortSearchParamType } from 'src/types/main-page';
import { DEFAULT_SORTING_OFFER_TYPE } from 'src/components/pages/main-page/constants/constants';

function MainPageSortOffers() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dropdownItems, setActiveDropdownItems] = useState<DropdownItem[]>(
    buildDropdownItems(),
  );
  const parsedSearchParams =
    parseSearchParams<MainPageSortSearchParamType>(searchParams);

  useEffect(() => {
    if (!parsedSearchParams.sort) {
      setSearchParams({
        ...parsedSearchParams,
        sort: DEFAULT_SORTING_OFFER_TYPE,
      });
    }

    if (parsedSearchParams.sort) {
      setActiveDropdownItems(buildDropdownItems(parsedSearchParams.sort));
    }
  }, [searchParams]);

  const handleDropdownItemClick = ({ value }: DropdownItem) => {
    setSearchParams({ ...parsedSearchParams, sort: value });
  };

  return (
    <SortDropdown
      items={dropdownItems}
      onDropdownItemClick={handleDropdownItemClick}
    />
  );
}

export default MainPageSortOffers;
