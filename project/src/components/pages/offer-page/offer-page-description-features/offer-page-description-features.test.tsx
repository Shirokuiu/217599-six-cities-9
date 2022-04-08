import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';

import { api } from 'src/store';
import { NameSpace } from 'src/store/constants/constants';
import { AuthorizationStatus } from 'src/types/auth';
import { CommentsStatus, OfferStatus } from 'src/types/offer-page-process';
import OfferPageDescriptionFeatures from 'src/components/pages/offer-page/offer-page-description-features/offer-page-description-features';
import { offers } from 'src/mocks/offers';

describe('Проверка на корректность рендера компонента OfferPageDescriptionFeatures', () => {
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  describe('Проверка рендера', () => {
    it('Компонент верно отрисовывается', () => {
      const store = mockStore({
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.NoAuth,
          me: undefined,
        },
        [NameSpace.OfferPage]: {
          offer: undefined,
          currentHoveredOffer: undefined,
          nearOffers: [],
          offerStatus: OfferStatus.Unknown,
          comments: [],
          commentsStatus: CommentsStatus.Unknown,
        },
      });

      const { container } = render(
        <Provider store={store}>
          <OfferPageDescriptionFeatures offer={offers[1]} />
        </Provider>,
        { wrapper: BrowserRouter },
      );

      expect(container).toBeInTheDocument();
    });
  });
});
