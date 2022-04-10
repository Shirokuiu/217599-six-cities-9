import { useAppSelector } from 'src/hooks';
import { switchMainPageComponents } from 'src/components/pages/main-page/helpers/switch-main-page-components';

export function MainPageOffersContainer() {
  const offersLoadingStatus = useAppSelector((state) => state.MAIN_PAGE.offersLoadingStatus);

  return switchMainPageComponents(offersLoadingStatus);
}

export default MainPageOffersContainer;
