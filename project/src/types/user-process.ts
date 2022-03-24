import { AuthorizationStatus } from 'src/types/auth';
import { User } from 'src/types/user';

export type InitialState = {
  authorizationStatus: AuthorizationStatus;
  me?: User;
};
