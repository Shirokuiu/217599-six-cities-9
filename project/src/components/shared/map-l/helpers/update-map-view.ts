import { Map } from 'leaflet';

import { MapLPoint } from 'src/types/map-l';

export const updateMapView = ({
  points,
  map,
}: {
  points: MapLPoint[];
  map: Map;
}): void => {
  const { latitude: lat, longitude: lng } = points[0];

  map.setView({
    lat,
    lng,
  });
};
