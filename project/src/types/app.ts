import { AuthorizationStatus } from 'src/types/auth';

export type AppProps = {
  placesFound: number;
  authorizationStatus: AuthorizationStatus;
};

export enum AppRoutingPath {
  Index = '/',
  NotFound = '*',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}
