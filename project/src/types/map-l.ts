export type MapLProps = {
  points: MapLPoint[];
};

export type MapLConfig = {
  DEFAULT_CUSTOM_ICON: MapLIcon;
  CURRENT_CUSTOM_ICON: MapLIcon;
  ZOOM: MapLZoom;
  TITLE_LAYER: MapTitleLayerConfig;
};

export type MapLIcon = {
  iconUrl: string;
  iconSize: [number, number];
  iconAnchor: [number, number];
};

export type MapLPoint = {
  id: number;
  isActive: boolean;
  latitude: number;
  longitude: number;
  zoom: number;
};

export type MapTitleLayerConfig = {
  urlTemplate: string;
  attribution: string;
};

export enum MapLZoom {
  DefaultZoom = 13,
}
