import leaflet, { Map } from 'leaflet';

import { MapLPoint } from 'src/types/map-l';
import { MAP_L_CONFIG } from 'src/components/shared/map-l/constants/constants';

const defaultCustomIcon = leaflet.icon(MAP_L_CONFIG.DEFAULT_CUSTOM_ICON);
const activeCustomIcon = leaflet.icon(MAP_L_CONFIG.CURRENT_CUSTOM_ICON);

export const setMapMarkers = ({
  points,
  map,
}: {
  points: MapLPoint[];
  map: Map;
}): void => {
  points.forEach(({ latitude: lat, longitude: lng, isActive }: MapLPoint) => {
    leaflet
      .marker(
        {
          lat,
          lng,
        },
        {
          icon: isActive ? activeCustomIcon : defaultCustomIcon,
        },
      )
      .addTo(map);
  });
};
