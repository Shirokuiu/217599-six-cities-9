import { useAppSelector } from 'src/hooks';
import { buildImages } from 'src/components/pages/offer-page/helpers/build-images';
import { Image } from 'src/types/offer-page';
import { getSelectorOffer } from 'src/store/offer-page-process/selectors';

function OfferPageGallery() {
  const offer = useAppSelector(getSelectorOffer);
  const images: Image[] = buildImages(offer?.images);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map(({ id, src }) => (
          <div className="property__image-wrapper" key={id}>
            <img className="property__image" src={src} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferPageGallery;
