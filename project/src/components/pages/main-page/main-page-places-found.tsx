import { useAppSelector } from 'src/hooks';

function MainPagePlacesFound() {
  const currentCity = useAppSelector((state) => state.currentCity);

  return (
    <b className="places__found">
      {currentCity?.offers.length ?? 0} places to stay in {currentCity?.city.name}
    </b>
  );
}

export default MainPagePlacesFound;
