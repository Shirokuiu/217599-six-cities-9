import { useEffect, useState } from 'react';

import { buildMapLPoints } from 'src/components/pages/main-page/helpers/build-map-l-points';
import { MapLPoint } from 'src/types/map-l';
import MapL from 'src/components/shared/map-l/map-l';
import { useAppSelector } from 'src/hooks';

function MainPageMap() {
  const { currentCity } = useAppSelector((state) => state);
  const [points, setPoints] = useState<MapLPoint[]>([]);

  useEffect(() => {
    if (currentCity) {
      setPoints(buildMapLPoints(currentCity.offers));
    }
  }, [currentCity]);

  return (
    <div className="cities__right-section">
      {points.length && <MapL points={points} />}
    </div>
  );
}

export default MainPageMap;
