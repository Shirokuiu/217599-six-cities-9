import { MapLZoom, MapLConfig } from 'src/types/map-l';

export const MAP_L_CONFIG: MapLConfig = {
  DEFAULT_CUSTOM_ICON: {
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [27, 39],
  },
  CURRENT_CUSTOM_ICON: {
    iconUrl: 'img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [27, 39],
  },
  ZOOM: MapLZoom.DefaultZoom,
  TITLE_LAYER: {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution:
      '\'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>\'',
  },
};
