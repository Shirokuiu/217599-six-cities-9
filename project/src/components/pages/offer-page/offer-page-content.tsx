import OfferPageGallery from 'src/components/pages/offer-page/offer-page-gallery';
import OfferPageDescription from 'src/components/pages/offer-page/offer-page-description';
import OfferPageMap from 'src/components/pages/offer-page/offer-page-map';
import OfferPageNearPlaces from 'src/components/pages/offer-page/offer-page-near-places';

function OfferPageContent() {
  return (
    <>
      <section className="property">
        <OfferPageGallery />
        <OfferPageDescription />
        <OfferPageMap />
      </section>
      <OfferPageNearPlaces />
    </>
  );
}

export default OfferPageContent;
