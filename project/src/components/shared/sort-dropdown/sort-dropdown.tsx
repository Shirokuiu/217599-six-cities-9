import React, { useEffect, useRef, useState } from 'react';

import Dropdown from 'src/components/shared/dropdown/dropdown';
import { SortDropdownProps } from 'src/types/sort-dropdown';
import { DropdownItem } from 'src/types/dropdown';
import { useClickOutside } from 'src/hooks/use-click-outside';
import { setActiveDropdownItem } from 'src/components/shared/sort-dropdown/helpers/set-active-dropdown-item';

function SortDropdown({ items, onDropdownItemClick = () => undefined }: SortDropdownProps) {
  const [isShow, toggleShow] = useState<boolean>(false);
  const [activeValue, setActiveValue] = useState<string>('');
  const [dropdownItems, setActiveDropdownItems] = useState<DropdownItem[]>([...items]);
  const ref = useRef<HTMLFormElement>(null);

  useClickOutside(ref, () => {
    toggleShow(false);
  });

  useEffect(() => {
    const activeItem: DropdownItem = items.find(
      ({ isActive }: DropdownItem) => isActive,
    ) as DropdownItem;
    const _dropdownItems: DropdownItem[] = setActiveDropdownItem({
      dropdownItems,
      currentItem: activeItem,
    });

    setActiveValue(activeItem.text);
    setActiveDropdownItems(_dropdownItems);
  }, [items]);

  const handleSortClick = () => {
    toggleShow((prevState) => !prevState);
  };

  const handleDropdownItemCLick = (dropdownItem: DropdownItem) => {
    onDropdownItemClick(dropdownItem);

    setActiveDropdownItems(
      setActiveDropdownItem({
        dropdownItems,
        currentItem: dropdownItem,
      }),
    );
    setActiveValue(dropdownItem.text);
    toggleShow(false);
  };

  return (
    <form ref={ref} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={handleSortClick}
        className="places__sorting-type"
        tabIndex={0}
      >
        {activeValue}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {isShow && <Dropdown items={dropdownItems} onDropdownItemClick={handleDropdownItemCLick} />}
    </form>
  );
}

export default SortDropdown;
