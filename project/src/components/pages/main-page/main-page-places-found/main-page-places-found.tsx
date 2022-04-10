import { useAppSelector } from 'src/hooks';
import { getCurrentCity } from 'src/store/main-page-process/selectors';

function MainPagePlacesFound() {
  const currentCity = useAppSelector(getCurrentCity);

  return (
    <b className="places__found">
      {currentCity?.offers.length ?? 0} places to stay in {currentCity?.city.name}
    </b>
  );
}

export default MainPagePlacesFound;
