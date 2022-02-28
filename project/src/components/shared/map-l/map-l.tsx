import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { MapLProps } from 'src/types/map-l';
import { initMap } from 'src/components/shared/map-l/helpers/init-map';
import { setMapMarkers } from 'src/components/shared/map-l/helpers/set-map-markers';
import { updateMapView } from 'src/components/shared/map-l/helpers/update-map-view';

function MapL({ points }: MapLProps) {
  const mapRef = useRef<HTMLElement | null>(null);
  const [map, setMap] = useState<Map | undefined>(undefined);

  useEffect(() => {
    if (mapRef.current !== null) {
      const mapInstance = initMap({
        points,
        mapRef: mapRef as MutableRefObject<HTMLElement>,
      });

      setMap(mapInstance);
    }
  }, [mapRef]);

  useEffect(() => {
    if (map) {
      updateMapView({ points, map });
      setMapMarkers({ points, map });
    }
  }, [map, points]);

  return <section ref={mapRef} className="cities__map map" />;
}

export default MapL;
