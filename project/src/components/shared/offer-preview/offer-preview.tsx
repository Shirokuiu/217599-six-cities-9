import { OfferPreviewProps } from 'src/types/offer-preview';
import { getClassName } from 'src/helpers/get-class-name';
import Bookmark from 'src/components/shared/bookmark/bookmark';
import Rating from 'src/components/shared/rating/rating';

function OfferPreview({ classNames, offer }: OfferPreviewProps) {
  const articleClass = getClassName({ classNames, defaultClass: 'place-card' });

  return (
    <article className={articleClass}>
      {offer.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className="place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          {
            <Bookmark
              classNames={['place-card__bookmark-button']}
              classNameActive={'place-card__bookmark-button--active'}
              isActive={offer.isFavorite}
            />
          }
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <Rating rate={offer.rating} />
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferPreview;
