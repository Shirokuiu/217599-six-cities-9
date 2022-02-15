import { RouteObject, useRoutes } from 'react-router-dom';
import MainPage from 'src/components/pages/main-page/main-page';
import React from 'react';

import { AppProps, AppRoutingPath } from 'src/types';
import NotFoundPage from 'src/components/pages/not-found-page/not-found-page';
import LoginPage from 'src/components/pages/login-page/login-page';
import FavoritesPage from 'src/components/pages/favorites-page/favorites-page';
import OfferPage from 'src/components/pages/offer-page/offer-page';

function AppRouting({ placesFound }: AppProps) {
  const routes: RouteObject[] = [
    {
      path: AppRoutingPath.Index,
      children: [
        {
          index: true,
          element: <MainPage placesFound={placesFound} />,
        },
        {
          path: AppRoutingPath.Login,
          element: <LoginPage />,
        },
        {
          path: AppRoutingPath.Favorites,
          element: <FavoritesPage />,
        },
        {
          path: AppRoutingPath.Offer,
          element: <OfferPage />,
        },
        {
          path: AppRoutingPath.NotFound,
          element: <NotFoundPage />,
        },
      ],
    },
  ];

  return useRoutes(routes);
}

export default AppRouting;
