import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/components/pages/app/app';
import { AuthorizationStatus } from 'src/types/auth';
import { offers } from 'src/mocks/offers';

const Config = {
  PLACES_FOUND: 6,
  AUTHORIZATION_STATUS: AuthorizationStatus.Auth,
  offers,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        placesFound={Config.PLACES_FOUND}
        authorizationStatus={Config.AUTHORIZATION_STATUS}
        offers={offers}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
