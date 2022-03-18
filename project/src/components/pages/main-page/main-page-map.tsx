import { useEffect, useState } from 'react';

import { buildMapLPoints } from 'src/components/pages/main-page/helpers/build-map-l-points';
import { MapLPoint } from 'src/types/map-l';
import MapL from 'src/components/shared/map-l/map-l';
import { useAppSelector } from 'src/hooks';
import { setActiveMapLPoint } from 'src/components/pages/main-page/helpers/set-active-map-l-point';

function MainPageMap() {
  const currentCity = useAppSelector((state) => state.MAIN_PAGE.currentCity);
  const currentHoveredOffer = useAppSelector((state) => state.MAIN_PAGE.currentHoveredOffer);
  const [points, setPoints] = useState<MapLPoint[]>([]);

  useEffect(() => {
    if (currentCity) {
      setPoints(buildMapLPoints(currentCity.offers));
    }
  }, [currentCity]);

  useEffect(() => {
    if (currentHoveredOffer !== 'unknown') {
      setPoints(setActiveMapLPoint({ points, activeOffer: currentHoveredOffer }));
    }
  }, [currentHoveredOffer]);

  return <div className="cities__right-section">{points.length && <MapL points={points} />}</div>;
}

export default MainPageMap;
