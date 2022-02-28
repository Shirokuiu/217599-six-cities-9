import { MutableRefObject } from 'react';
import leaflet, { Map } from 'leaflet';

import { MapLPoint } from 'src/types/map-l';
import { MAP_L_CONFIG } from 'src/components/shared/map-l/constants/constants';

export const initMap = ({
  points,
  mapRef,
}: {
  points: MapLPoint[];
  mapRef: MutableRefObject<HTMLElement>;
}): Map => {
  const { latitude: lat, longitude: lng } = points[0];

  const instance = leaflet.map(mapRef.current, {
    center: {
      lat,
      lng,
    },
    zoom: MAP_L_CONFIG.ZOOM,
  });

  leaflet
    .tileLayer(MAP_L_CONFIG.TITLE_LAYER.urlTemplate, {
      attribution: MAP_L_CONFIG.TITLE_LAYER.attribution,
    })
    .addTo(instance);

  return instance;
};
