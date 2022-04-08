import { OfferPageDescriptionInsideProps } from 'src/types/offer-page';
import { buildGoods } from 'src/components/pages/offer-page/helpers/build-goods';

function OfferPageDescriptionInside({ goods }: OfferPageDescriptionInsideProps) {
  const parsedGoods = buildGoods(goods);

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {parsedGoods.map(({ id, text }) => (
          <li key={id} className="property__inside-item">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OfferPageDescriptionInside;
