import { useEffect, useState } from 'react';

import { buildMapLPoints } from 'src/components/pages/main-page/helpers/build-map-l-points';
import { MapLPoint } from 'src/types/map-l';
import MapL from 'src/components/shared/map-l/map-l';
import { useAppSelector } from 'src/hooks';
import { setActiveMapLPoint } from 'src/components/pages/main-page/helpers/set-active-map-l-point';
import { getCurrentCity, getCurrentHoveredOffer } from 'src/store/main-page-process/selectors';

function MainPageMap() {
  const currentCity = useAppSelector(getCurrentCity);
  const currentHoveredOffer = useAppSelector(getCurrentHoveredOffer);
  const [points, setPoints] = useState<MapLPoint[]>([]);

  useEffect(() => {
    if (currentCity) {
      const newPoints = buildMapLPoints(currentCity.offers);

      setPoints(newPoints);

      if (currentHoveredOffer && currentHoveredOffer !== 'unknown') {
        setPoints(setActiveMapLPoint({ points, activeOffer: currentHoveredOffer }));
      }
    }
  }, [currentCity, currentHoveredOffer]);

  return <div className="cities__right-section">{points.length && <MapL points={points} />}</div>;
}

export default MainPageMap;
