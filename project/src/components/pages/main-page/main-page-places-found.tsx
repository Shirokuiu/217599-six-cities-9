import { useAppSelector } from 'src/hooks';

function MainPagePlacesFound() {
  const { currentCity } = useAppSelector((state) => state);

  return (
    <b className="places__found">
      {currentCity?.offers.length ?? 0} places to stay in Amsterdam
    </b>
  );
}

export default MainPagePlacesFound;
