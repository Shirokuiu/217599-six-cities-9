import { Offer } from 'src/types/offer';
import { GroupedCity } from 'src/types/main-page';

export type FavoritePageListProps = {
  favorites: GroupedCity[];
};

export type FavoritePreviewProps = {
  favorite: Offer;
};
