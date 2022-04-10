import { Offer } from 'src/types/offer';
import { GroupedCity } from 'src/types/main-page';

type HoveredOfferUnknown = 'unknown'; // NOTE unknown - когда ниразу на карточку не наводили
type HoveredOffer = Offer; // NOTE Offer - когда навели на карточку
type NoHoveredOffer = undefined; // NOTE undefined - когда увели ховер с карточки

export type InitialState = {
  offers: Offer[];
  offersLoadingStatus: OffersLoadingStatus;
  groupedCities: GroupedCity[];
  currentHoveredOffer: HoveredOfferState;
  currentCity?: GroupedCity;
};

export type HoveredOfferState = HoveredOfferUnknown | HoveredOffer | NoHoveredOffer;
export type ToggleFavoriteProps = {
  groupedCityId: number;
  offerId: number;
};

export enum OffersLoadingStatus {
  Unknown = 'unknown',
  Loading = 'loading',
  Filled = 'filled',
  Empty = 'empty',
}
