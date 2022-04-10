import { State } from 'src/types/state';
import { NameSpace } from 'src/store/constants/constants';

export const getAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;
export const getMe = (state: State) => state[NameSpace.User].me;
