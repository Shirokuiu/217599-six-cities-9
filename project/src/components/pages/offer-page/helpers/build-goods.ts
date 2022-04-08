import { Good } from 'src/types/offer-page';

export const buildGoods = (goods: string[]): Good[] =>
  goods.map((good, idx) => ({
    id: idx + 1,
    text: good,
  }));
