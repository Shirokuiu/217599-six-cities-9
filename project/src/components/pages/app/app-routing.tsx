import { RouteObject, useRoutes } from 'react-router-dom';
import MainPage from 'src/components/pages/main-page/main-page';
import { lazy, Suspense } from 'react';

import { AppProps, AppRoutingPath } from 'src/types';
import NotFoundPage from 'src/components/pages/not-found-page/not-found-page';
import LoginPage from 'src/components/pages/login-page/login-page';

function AppRouting({ placesFound }: AppProps) {
  const FavoritesPage = lazy(
    () => import('src/components/pages/favorites-page/favorites-page')
  );
  const OfferPage = lazy(
    () => import('src/components/pages/offer-page/offer-page')
  );

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
          element: (
            <Suspense fallback={<>...</>}>
              <FavoritesPage />
            </Suspense>
          ),
        },
        {
          path: AppRoutingPath.Offer,
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
