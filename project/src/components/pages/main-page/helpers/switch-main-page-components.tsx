import MainPageOffers from 'src/components/pages/main-page/main-page-offers/main-page-offers';
import MainPageOffersEmpty from 'src/components/pages/main-page/main-page-offers-empty/main-page-offers-empty';
import { OffersLoadingStatus } from 'src/types/main-page-process';
import Loader from 'src/components/shared/loader/loader';

export const switchMainPageComponents = (offersLoadingStatus: OffersLoadingStatus): JSX.Element => {
  switch (offersLoadingStatus) {
    case OffersLoadingStatus.Unknown:
      return <Loader />;
    case OffersLoadingStatus.Filled:
      return <MainPageOffers />;
    case OffersLoadingStatus.Empty:
      return <MainPageOffersEmpty />;
    default:
      return <Loader />;
  }
};
