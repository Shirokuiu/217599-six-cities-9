import { useAppSelector } from 'src/hooks';
import OfferPageDescriptionName from 'src/components/pages/offer-page/offer-page-description-name';
import OfferPageDescriptionRating from 'src/components/pages/offer-page/offer-page-description-rating';
import OfferPageDescriptionFeatures from 'src/components/pages/offer-page/offer-page-description-features';
import OfferPageDescriptionInside from 'src/components/pages/offer-page/offer-page-description-inside';
import OfferPageDescriptionHost from 'src/components/pages/offer-page/offer-page-description-host';
import OfferPageDescriptionReviewsWrap from 'src/components/pages/offer-page/offer-page-description-reviews-wrap';

function OfferPageDescription() {
  const offer = useAppSelector((state) => state.OFFER_PAGE.offer);

  return (
    <div className="property__container container">
      {offer && (
        <div className="property__wrapper">
          {offer?.isPremium && (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          )}
          <OfferPageDescriptionName offer={offer} />
          <OfferPageDescriptionRating rating={offer.rating} />
          <OfferPageDescriptionFeatures offer={offer} />
          <div className="property__price">
            <b className="property__price-value">€ {offer.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <OfferPageDescriptionInside goods={offer.goods} />
          <OfferPageDescriptionHost offer={offer} />
          <OfferPageDescriptionReviewsWrap />
        </div>
      )}
    </div>
  );
}

export default OfferPageDescription;
