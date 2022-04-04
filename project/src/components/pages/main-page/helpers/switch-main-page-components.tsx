import { Offer } from 'src/types/offer';
import MainPageOffers from 'src/components/pages/main-page/main-page-offers/main-page-offers';
import MainPageOffersEmpty from 'src/components/pages/main-page/main-page-offers-empty/main-page-offers-empty';

export const switchMainPageComponents = (offers?: Offer[]): JSX.Element =>
  offers?.length ? <MainPageOffers /> : <MainPageOffersEmpty />;
