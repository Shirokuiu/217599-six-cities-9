import { DropdownItem, DropdownProps } from 'src/types/dropdown';

function Dropdown({ items, onDropdownItemClick = () => undefined }: DropdownProps) {
  return (
    <ul
      className="places__options places__options--custom places__options--opened"
      data-testid="dropdown"
    >
      {items.map((dropdownItem: DropdownItem) => (
        <li
          key={dropdownItem.id}
          onClick={() => onDropdownItemClick(dropdownItem)}
          className={['places__option', dropdownItem.isActive && 'places__option--active']
            .filter(Boolean)
            .join(' ')}
          tabIndex={0}
          data-testid={`dropdown-item-${dropdownItem.text}`}
        >
          {dropdownItem.text}
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;
