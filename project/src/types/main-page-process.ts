import { Offer } from 'src/types/offer';
import { GroupedCity } from 'src/types/main-page';

type HoveredOfferUnknown = 'unknown'; // NOTE unknown - когда ниразу на карточку не наводили
type HoveredOffer = Offer; // NOTE Offer - когда навели на карточку
type NoHoveredOffer = undefined; // NOTE undefined - когда увели ховер с карточки

export type InitialState = {
  offers: Offer[];
  groupedCities: GroupedCity[];
  currentHoveredOffer: HoveredOfferState;
  currentCity?: GroupedCity;
};

export type HoveredOfferState = HoveredOfferUnknown | HoveredOffer | NoHoveredOffer;
export type ToggleFavoriteProps = {
  groupedCityId: number;
  offerId: number;
};
