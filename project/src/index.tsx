import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from 'src/components/pages/app/app';
import { store } from 'src/store';
import { checkAuth } from 'src/store/api-actions/user/user';

// NOTE Пока тут, так как надо проверить,
// почему App перерендеривается несколько раз на каждое изменение маршрута
store.dispatch(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
