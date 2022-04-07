import { useEffect, useState } from 'react';

import { useAppSelector } from 'src/hooks';
import { MapLPoint } from 'src/types/map-l';
import { buildMapLPoints } from 'src/components/pages/main-page/helpers/build-map-l-points';
import MapL from 'src/components/shared/map-l/map-l';
import { setActiveMapLPoint } from 'src/components/pages/main-page/helpers/set-active-map-l-point';

function OfferPageMap() {
  const offer = useAppSelector((state) => state.OFFER_PAGE.offer);
  const nearOffers = useAppSelector((state) => state.OFFER_PAGE.nearOffers);
  const currentHoveredOffer = useAppSelector((state) => state.OFFER_PAGE.currentHoveredOffer);
  const [points, setPoints] = useState<MapLPoint[]>([]);

  useEffect(() => {
    if (offer && !currentHoveredOffer) {
      const newPoints = buildMapLPoints([...nearOffers, offer]);

      setPoints(setActiveMapLPoint({ points: newPoints, activeOffer: offer }));
    }

    if (currentHoveredOffer) {
      setPoints(setActiveMapLPoint({ points, activeOffer: currentHoveredOffer }));
    }
  }, [offer, nearOffers, currentHoveredOffer]);

  return (
    <section className="property__map map" style={{ display: 'flex' }}>
      {points.length && <MapL points={points} />}
    </section>
  );
}

export default OfferPageMap;
