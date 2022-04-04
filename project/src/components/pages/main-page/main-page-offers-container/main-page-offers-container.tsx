import { useAppSelector } from 'src/hooks';
import { switchMainPageComponents } from 'src/components/pages/main-page/helpers/switch-main-page-components';

export function MainPageOffersContainer() {
  const currentCity = useAppSelector((state) => state.MAIN_PAGE.currentCity);

  return switchMainPageComponents(currentCity?.offers);
}

export default MainPageOffersContainer;
