import ReviewForm from 'src/components/shared/review-form/review-form';
import { useAppSelector } from 'src/hooks';
import OfferPageDescriptionName from 'src/components/pages/offer-page/offer-page-description-name';
import OfferPageDescriptionRating from 'src/components/pages/offer-page/offer-page-description-rating';
import OfferPageDescriptionFeatures from 'src/components/pages/offer-page/offer-page-description-features';
import OfferPageDescriptionInside from 'src/components/pages/offer-page/offer-page-description-inside';
import OfferPageDescriptionHost from 'src/components/pages/offer-page/offer-page-description-host';

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
          <section className="property__reviews reviews">
            <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">1</span>
            </h2>
            <ul className="reviews__list">
              <li className="reviews__item">
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img
                      className="reviews__avatar user__avatar"
                      src="img/avatar-max.jpg"
                      width={54}
                      height={54}
                      alt="Reviews avatar"
                    />
                  </div>
                  <span className="reviews__user-name">Max</span>
                </div>
                <div className="reviews__info">
                  <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                      <span style={{ width: '80%' }} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <p className="reviews__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness
                    of Amsterdam. The building is green and from 18th century.
                  </p>
                  <time className="reviews__time" dateTime="2019-04-24">
                    April 2019
                  </time>
                </div>
              </li>
            </ul>
            <ReviewForm />
          </section>
        </div>
      )}
    </div>
  );
}

export default OfferPageDescription;
