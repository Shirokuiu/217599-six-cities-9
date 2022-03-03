import { MapLZoom, MapLConfig } from 'src/types/map-l';

export const MAP_L_CONFIG: MapLConfig = {
  DEFAULT_CUSTOM_ICON: {
    iconUrl:
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  },
  CURRENT_CUSTOM_ICON: {
    iconUrl:
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  },
  ZOOM: MapLZoom.DefaultZoom,
  TITLE_LAYER: {
    urlTemplate:
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution:
      '\'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>\'',
  },
};
