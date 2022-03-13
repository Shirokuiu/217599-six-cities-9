import { RouteObject, useRoutes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import MainPage from 'src/components/pages/main-page/main-page';
import NotFoundPage from 'src/components/pages/not-found-page/not-found-page';
import PrivateAuthRoute from 'src/hocs/private-auth-route/private-auth-route';
import { AppRoutingPath } from 'src/types/app';
import { favorites } from 'src/mocks/favorites';
import PrivateNoAuthRoute from 'src/hocs/private-no-auth-route/private-no-auth-route';

const LoginPage = lazy(
  () => import('src/components/pages/login-page/login-page'),
);
const FavoritesPage = lazy(
  () => import('src/components/pages/favorites-page/favorites-page'),
);
const OfferPage = lazy(
  () => import('src/components/pages/offer-page/offer-page'),
);

function AppRouting() {
  const routes: RouteObject[] = [
    {
      path: AppRoutingPath.Index,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: AppRoutingPath.Login,
          element: (
            <PrivateNoAuthRoute>
              <Suspense fallback={<>...</>}>
                <LoginPage />
              </Suspense>
            </PrivateNoAuthRoute>
          ),
        },
        {
          path: AppRoutingPath.Favorites,
          element: (
            <PrivateAuthRoute>
              <Suspense fallback={<>...</>}>
                <FavoritesPage offers={favorites} />
              </Suspense>
            </PrivateAuthRoute>
          ),
        },
        {
          path: `${AppRoutingPath.OfferPage}/:id`,
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
