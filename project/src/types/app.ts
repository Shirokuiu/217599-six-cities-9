import { AuthorizationStatus } from 'src/types/auth';
import { Offer } from 'src/types/offer';

export type AppProps = {
  placesFound: number;
  authorizationStatus: AuthorizationStatus;
  offers: Offer[];
};

export enum AppRoutingPath {
  Index = '/',
  NotFound = '*',
  Login = '/login',
  Favorites = '/favorites',
  OfferPage = '/offer',
}
