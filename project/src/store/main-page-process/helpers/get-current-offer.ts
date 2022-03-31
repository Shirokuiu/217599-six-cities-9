import { GroupedCity } from 'src/types/main-page';

export const getCurrentOffer = ({
  countryName,
  groupedCities,
}: {
  countryName: string;
  groupedCities: GroupedCity[];
}): GroupedCity | undefined =>
  groupedCities.find(
    (groupedOffer: GroupedCity) => groupedOffer.city.name === countryName,
  );
