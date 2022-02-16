import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/components/pages/app/app';
import { AuthorizationStatus } from 'src/types';

const Config = {
  PLACES_FOUND: 6,
  AUTHORIZATION_STATUS: AuthorizationStatus.Auth,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        placesFound={Config.PLACES_FOUND}
        authorizationStatus={Config.AUTHORIZATION_STATUS}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
