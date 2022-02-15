import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/components/pages/app/app';

const Config = {
  PLACES_FOUND: 6,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App placesFound={Config.PLACES_FOUND} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
