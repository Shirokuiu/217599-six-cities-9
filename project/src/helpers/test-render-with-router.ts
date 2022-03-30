import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// NOTE https://testing-library.com/docs/example-react-router/
export const testRenderWithRouter = (ui: any, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};
