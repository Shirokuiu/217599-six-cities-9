import { Offer, OfferCity } from 'src/types/offer';
import { GroupedOffer } from 'src/types/main-page';

const filterCity = (cityName: string, offers: Offer[]): Offer[] =>
  offers.filter(({ city }: Offer) => cityName === city.name);

const makeUniqueCityNames = (cityNames: string[]): string[] => [
  ...new Set(cityNames),
];

const getAllCityNames = (offers: Offer[]): string[] =>
  makeUniqueCityNames(offers.map(({ city }: Offer) => city.name));

export const groupOffersByCity = (offers: Offer[]): GroupedOffer[] => {
  const cityNames: string[] = getAllCityNames(offers);

  return cityNames.map((cityName: string, idx: number) => ({
    id: idx + 1,
    city: offers.find(({ city }: Offer) => city.name === cityName)
      ?.city as OfferCity,
    offers: filterCity(cityName, offers),
  }));
};
