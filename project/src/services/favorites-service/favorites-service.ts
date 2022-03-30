import { SendStatus } from 'src/types/favorites-service';
import { Offer } from 'src/types/offer';
import { api } from 'src/store';
import { FavoritesRoute } from 'src/services/favorites-service/constants/constants';

class FavoritesService {
  static async set(offerId: number): Promise<Offer> {
    const { data } = await api.post(
      `${FavoritesRoute.favorite}/${offerId}/${SendStatus.AddFavorite}`,
    );

    return data;
  }

  static async remove(offerId: number): Promise<Offer> {
    const { data } = await api.post(
      `${FavoritesRoute.favorite}/${offerId}/${SendStatus.RemoveFavorite}`,
    );

    return data;
  }
}

export default FavoritesService;
