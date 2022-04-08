import { FormRatingItem } from 'src/types/form-rating';

const LabelTitles: { [key: string]: string } = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly',
};

const ratingValues = ['5', '4', '3', '2', '1'];

export const buildRatingItems = (): FormRatingItem[] =>
  ratingValues.map((value: string) => ({
    id: `${value}-stars`,
    key: Math.random(),
    value,
    labelTitle: LabelTitles[value],
  }));
