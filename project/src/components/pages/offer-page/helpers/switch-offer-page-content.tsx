import { Navigate } from 'react-router-dom';

import { OfferStatus } from 'src/types/offer-page-process';
import Loader from 'src/components/shared/loader/loader';
import OfferPageContent from 'src/components/pages/offer-page/offer-page-content/offer-page-content';
import { AppRoutingPath } from 'src/types/app';
import ErrorApiMsg from 'src/components/shared/error-api-msg/error-api-msg';

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
    case OfferStatus.ApiError:
      return <ErrorApiMsg />;
    default:
      return <Navigate to={AppRoutingPath.NotFound} />;
  }
};
