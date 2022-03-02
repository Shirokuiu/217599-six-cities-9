import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from 'src/components/pages/app/app';
import { AuthorizationStatus } from 'src/types/auth';
import { offers } from 'src/mocks/offers';
import { store } from 'src/store';

const Config = {
  PLACES_FOUND: 6,
  AUTHORIZATION_STATUS: AuthorizationStatus.Auth,
  offers,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App
          placesFound={Config.PLACES_FOUND}
          authorizationStatus={Config.AUTHORIZATION_STATUS}
          offers={offers}
        />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
