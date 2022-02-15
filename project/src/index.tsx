import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/components/pages/app/app';

const Config = {
  PLACES_FOUND: 6,
};

/* eslint-disable */
ReactDOM.render(
  <React.StrictMode>
    <App placesFound={Config.PLACES_FOUND} />
  </React.StrictMode>,
  document.getElementById('root')
);
