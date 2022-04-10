import { useAppSelector } from 'src/hooks';
import { switchOfferPageContent } from 'src/components/pages/offer-page/helpers/switch-offer-page-content';
import { getOfferStatus } from 'src/store/offer-page-process/selectors';

function OfferPageContentWrap() {
  const offerStatus = useAppSelector(getOfferStatus);

  return switchOfferPageContent(offerStatus);
}

export default OfferPageContentWrap;
