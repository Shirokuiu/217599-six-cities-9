import { Offer } from 'src/types/offer';
import { api } from 'src/store';
import { HotelsRoute } from 'src/services/hotels/constants/constants';

class Hotels {
  static async getOffers(): Promise<Offer[]> {
    const { data } = await api.get<Offer[]>(HotelsRoute.Hotels);

    return data;
  }
}

export default Hotels;
