import { useAppSelector } from 'src/hooks';
import MainPageOffersEmpty from 'src/components/pages/main-page/main-page-offers-empty';
import { Offer } from 'src/types/offer';

import MainPageOffers from 'src/components/pages/main-page/main-page-offers';

const switchComponents = (offers?: Offer[]): JSX.Element =>
  offers?.length ? <MainPageOffers /> : <MainPageOffersEmpty />;

export function MainPageOffersContainer() {
  const currentCity = useAppSelector((state) => state.MAIN_PAGE.currentCity);

  return switchComponents(currentCity?.offers);
}

export default MainPageOffersContainer;
