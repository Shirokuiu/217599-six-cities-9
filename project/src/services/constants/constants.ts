export const BACKEND_URL = 'https://9.react.pages.academy/six-cities';
export const REQUEST_TIMEOUT = 5000;
export const TOKEN_KEY_LOCAL_STORAGE = 'authToken';

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export enum APIErrorCode {
  Unauthorized = 401,
}
