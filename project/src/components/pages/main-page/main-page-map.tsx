import { memo } from 'react';

import { MainPageMapProps } from 'src/types/main-page-map';
import { buildMapLPoints } from 'src/components/pages/main-page/helpers/build-map-l-points';
import { MapLPoint } from 'src/types/map-l';
import MapLeaflet from 'src/components/shared/map-l/map-l';

function MainPageMap({ offers }: MainPageMapProps) {
  const points: MapLPoint[] = buildMapLPoints(offers);

  return (
    <div className="cities__right-section">
      {points.length && <MapLeaflet points={points} />}
    </div>
  );
}

// NOTE Тут уточнить, почему он перерендеривает 2 раза
// В принципе понятно, сначало стейт родителя пустой массив,
// а потом, после изменения квери параметра из адресной строки, массив заполнен контентом с помощью setState()
// Цель - нормальный ли это кейс, оптимизация дочернего компонента с помощью memo()
export default memo(
  MainPageMap,
  (prevProps, nextProps) => prevProps.offers === nextProps.offers,
);
