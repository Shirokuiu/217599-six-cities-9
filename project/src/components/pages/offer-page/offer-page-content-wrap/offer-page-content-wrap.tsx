import { useAppSelector } from 'src/hooks';
import { switchOfferPageContent } from 'src/components/pages/offer-page/helpers/switch-offer-page-content';

function OfferPageContentWrap() {
  const offerStatus = useAppSelector((state) => state.OFFER_PAGE.offerStatus);

  return switchOfferPageContent(offerStatus);
}

export default OfferPageContentWrap;
