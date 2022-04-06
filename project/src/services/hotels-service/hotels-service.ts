import { Offer } from 'src/types/offer';
import { api } from 'src/store';
import { HotelsRoute } from 'src/services/hotels-service/constants/constants';

class HotelsService {
  static async getOffers(): Promise<Offer[]> {
    const { data } = await api.get<Offer[]>(HotelsRoute.Hotels);

    return data;
  }

  static async getOffer(offerId: number): Promise<Offer> {
    const { data } = await api.get<Offer>(`${HotelsRoute.Hotels}/${offerId}`);

    return data;
  }
}

export default HotelsService;
