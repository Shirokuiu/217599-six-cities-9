import { Offer } from 'src/types/offer';
import { MapLPoint } from 'src/types/map-l';

export const buildMapLPoints = (offers: Offer[]): MapLPoint[] =>
  offers.map(({ id, location: { latitude, longitude, zoom } }: Offer) => ({
    isActive: false,
    id,
    latitude,
    longitude,
    zoom,
  }));
