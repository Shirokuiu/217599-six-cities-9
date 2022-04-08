import { OfferStatus } from 'src/types/offer-page-process';
import Loader from 'src/components/shared/loader/loader';
import OfferPageContent from 'src/components/pages/offer-page/offer-page-content/offer-page-content';
import { Navigate } from 'react-router-dom';
import { AppRoutingPath } from 'src/types/app';

export const switchOfferPageContent = (offerStatus: OfferStatus): JSX.Element => {
  switch (offerStatus) {
    case OfferStatus.Unknown:
      return <Loader />;
    case OfferStatus.Loading:
      return <Loader />;
    case OfferStatus.Filled:
      return <OfferPageContent />;
    case OfferStatus.NotFound:
      return <Navigate to={AppRoutingPath.NotFound} />;
    default:
      return <Navigate to={AppRoutingPath.NotFound} />;
  }
};
