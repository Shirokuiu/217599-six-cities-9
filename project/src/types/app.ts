export type AppProps = {
  placesFound: number;
};

export enum AppRoutingPath {
  Index = '/',
  NotFound = '*',
  Login = 'login',
  Favorites = 'favorites',
  Offer = 'offer/:id',
}
