import { State } from 'src/types/state';
import { NameSpace } from 'src/store/constants/constants';

export const getOffersLoadingStatus = (state: State) =>
  state[NameSpace.MainPage].offersLoadingStatus;
export const getGroupedCities = (state: State) => state[NameSpace.MainPage].groupedCities;
export const getCurrentCity = (state: State) => state[NameSpace.MainPage].currentCity;
export const getCurrentHoveredOffer = (state: State) =>
  state[NameSpace.MainPage].currentHoveredOffer;
