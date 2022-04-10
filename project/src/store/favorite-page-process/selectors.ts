import { State } from 'src/types/state';
import { NameSpace } from 'src/store/constants/constants';

export const getFavoriteState = (state: State) =>
  state[NameSpace.FavoritePage].favorite.favoriteState;
export const getFavoriteItems = (state: State) => state[NameSpace.FavoritePage].favorite.items;
