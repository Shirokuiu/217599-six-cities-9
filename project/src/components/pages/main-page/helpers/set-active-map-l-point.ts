import { MapLPoint } from 'src/types/map-l';
import { Offer } from 'src/types/offer';

export const setActiveMapLPoint = ({
  points,
  activeOffer,
}: {
  points: MapLPoint[];
  activeOffer?: Offer;
}): MapLPoint[] =>
  points.map((point: MapLPoint) => ({
    ...point,
    isActive:
      point.latitude === activeOffer?.location.latitude &&
      point.longitude === activeOffer.location.longitude,
  }));
