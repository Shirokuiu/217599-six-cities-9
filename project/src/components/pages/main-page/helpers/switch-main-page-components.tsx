import MainPageOffers from 'src/components/pages/main-page/main-page-offers/main-page-offers';
import MainPageOffersEmpty from 'src/components/pages/main-page/main-page-offers-empty/main-page-offers-empty';
import { OffersLoadingStatus } from 'src/types/main-page-process';
import Loader from 'src/components/shared/loader/loader';
import ErrorApiMsg from 'src/components/shared/error-api-msg/error-api-msg';

export const switchMainPageComponents = (offersLoadingStatus: OffersLoadingStatus): JSX.Element => {
  switch (offersLoadingStatus) {
    case OffersLoadingStatus.Unknown:
      return <Loader />;
    case OffersLoadingStatus.Filled:
      return <MainPageOffers />;
    case OffersLoadingStatus.Empty:
      return <MainPageOffersEmpty />;
    case OffersLoadingStatus.ApiError:
      return <ErrorApiMsg />;
    default:
      return <Loader />;
  }
};
