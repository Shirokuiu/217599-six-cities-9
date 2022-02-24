import { RouteObject, useRoutes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import MainPage from 'src/components/pages/main-page/main-page';
import NotFoundPage from 'src/components/pages/not-found-page/not-found-page';
import LoginPage from 'src/components/pages/login-page/login-page';
import PrivateRoute from 'src/hocs/private-route/private-route';
import { AppProps, AppRoutingPath } from 'src/types/app';
import { favorites } from 'src/mocks/favorites';

const FavoritesPage = lazy(
  () => import('src/components/pages/favorites-page/favorites-page'),
);
const OfferPage = lazy(
  () => import('src/components/pages/offer-page/offer-page'),
);

function AppRouting({ placesFound, authorizationStatus, offers }: AppProps) {
  const routes: RouteObject[] = [
    {
      path: AppRoutingPath.Index,
      children: [
        {
          index: true,
          element: <MainPage placesFound={placesFound} offers={offers} />,
        },
        {
          path: AppRoutingPath.Login,
          element: <LoginPage />,
        },
        {
          path: AppRoutingPath.Favorites,
          element: (
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Suspense fallback={<>...</>}>
                <FavoritesPage offers={favorites} />
              </Suspense>
            </PrivateRoute>
          ),
        },
        {
          path: AppRoutingPath.OfferPage,
          element: (
            <Suspense fallback={<>...</>}>
              <OfferPage />
            </Suspense>
          ),
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
