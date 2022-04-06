import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import OfferPageHeader from 'src/components/pages/offer-page/offer-page-header';
import OfferPageContentWrap from 'src/components/pages/offer-page/offer-page-content-wrap';
import { useAppDispatch } from 'src/hooks';
import { getOffer } from 'src/store/offer-page-process/api-actions/api-actions';
import { clearState } from 'src/store/offer-page-process/reducer/offer-page-process';

function OfferPage() {
  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(getOffer(+params.id));
    }

    return () => {
      dispatch(clearState());
    };
  }, []);

  return (
    <div className="page">
      <OfferPageHeader />
      <main className="page__main page__main--property">
        <OfferPageContentWrap />
      </main>
    </div>
  );
}

export default OfferPage;
