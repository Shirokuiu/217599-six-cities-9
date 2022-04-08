import { OfferPageDescriptionFeaturesProps } from 'src/types/offer-page';

function OfferPageDescriptionFeatures({ offer }: OfferPageDescriptionFeaturesProps) {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">{offer.type}</li>
      <li className="property__feature property__feature--bedrooms">{offer.bedrooms} Bedrooms</li>
      <li className="property__feature property__feature--adults">Max {offer.maxAdults} adults</li>
    </ul>
  );
}

export default OfferPageDescriptionFeatures;
