import { useAppSelector } from 'src/hooks';
import { MapLPoint } from 'src/types/map-l';
import { buildMapLPoints } from 'src/components/pages/main-page/helpers/build-map-l-points';
import MapL from 'src/components/shared/map-l/map-l';

function OfferPageMap() {
  const offer = useAppSelector((state) => state.OFFER_PAGE.offer);
  const points: MapLPoint[] = buildMapLPoints(offer ? [offer] : []);

  return (
    <section className="property__map map" style={{ display: 'flex' }}>
      {points.length && <MapL points={points} />}
    </section>
  );
}

export default OfferPageMap;
