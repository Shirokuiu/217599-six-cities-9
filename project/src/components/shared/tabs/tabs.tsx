import { Tab, TabsProps } from 'src/types/tabs';
// import { Link } from 'react-router-dom';

function Tabs({ tabs, renderTabContent = () => undefined }: TabsProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {tabs.map(({ text, id }: Tab) => (
            <li key={id} className="locations__item">
              {renderTabContent(text)}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
