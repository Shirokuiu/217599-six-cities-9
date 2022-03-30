import { Offer } from 'src/types/offer';
import { GroupedCity } from 'src/types/main-page';

const filterCity = (cityName: string, offers: Offer[]): Offer[] =>
  offers.filter(({ city }: Offer) => cityName === city.name);

const makeUniqueCityNames = (cityNames: string[]): string[] => [...new Set(cityNames)];

const getAllCityNames = (offers: Offer[]): string[] =>
  makeUniqueCityNames(offers.map(({ city }: Offer) => city.name));

export const groupCities = (offers: Offer[]): GroupedCity[] => {
  const cityNames: string[] = getAllCityNames(offers);

  return cityNames.map((cityName: string, idx: number) => ({
    id: idx + 1,
    city: offers.find(({ city }: Offer) => city.name === cityName)!.city,
    offers: filterCity(cityName, offers),
  }));
};
