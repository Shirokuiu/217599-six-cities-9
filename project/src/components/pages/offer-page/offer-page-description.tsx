import ReviewForm from 'src/components/shared/review-form/review-form';
import { useAppSelector } from 'src/hooks';
import OfferPageDescriptionName from 'src/components/pages/offer-page/offer-page-description-name';

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
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{ width: '80%' }} />
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">4.8</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">Apartment</li>
            <li className="property__feature property__feature--bedrooms">3 Bedrooms</li>
            <li className="property__feature property__feature--adults">Max 4 adults</li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">€120</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2 className="property__inside-title">What's inside</h2>
            <ul className="property__inside-list">
              <li className="property__inside-item">Wi-Fi</li>
              <li className="property__inside-item">Washing machine</li>
              <li className="property__inside-item">Towels</li>
              <li className="property__inside-item">Heating</li>
              <li className="property__inside-item">Coffee machine</li>
              <li className="property__inside-item">Baby seat</li>
              <li className="property__inside-item">Kitchen</li>
              <li className="property__inside-item">Dishwasher</li>
              <li className="property__inside-item">Cabel TV</li>
              <li className="property__inside-item">Fridge</li>
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img
                  className="property__avatar user__avatar"
                  src="img/avatar-angelina.jpg"
                  width={74}
                  height={74}
                  alt="Host avatar"
                />
              </div>
              <span className="property__user-name">Angelina</span>
              <span className="property__user-status">Pro</span>
            </div>
            <div className="property__description">
              <p className="property__text">
                A quiet cozy and picturesque that hides behind a a river by the unique lightness of
                Amsterdam. The building is green and from 18th century.
              </p>
              <p className="property__text">
                An independent House, strategically located between Rembrand Square and National
                Opera, but where the bustle of the city comes to rest in this alley flowery and
                colorful.
              </p>
            </div>
          </div>
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
