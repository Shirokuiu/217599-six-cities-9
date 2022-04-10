import { useAppSelector } from 'src/hooks';
import { switchMainPageComponents } from 'src/components/pages/main-page/helpers/switch-main-page-components';
import { getOffersLoadingStatus } from 'src/store/main-page-process/selectors';

export function MainPageOffersContainer() {
  const offersLoadingStatus = useAppSelector(getOffersLoadingStatus);

  return switchMainPageComponents(offersLoadingStatus);
}

export default MainPageOffersContainer;
