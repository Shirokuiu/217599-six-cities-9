import { Tab, TabsProps } from 'src/types/tabs';
import { Link } from 'react-router-dom';

function Tabs({ tabs }: TabsProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {tabs.map(({ text, id, isActive }: Tab) => (
            <li key={id} className="locations__item">
              <Link
                to={`?country=${text}`}
                className={[
                  'locations__item-link',
                  'tabs__item',
                  isActive ? 'tabs__item--active' : undefined,
                ].join(' ')}
              >
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
