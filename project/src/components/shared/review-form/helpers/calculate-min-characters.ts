import { MIN_CHARACTER_LENGTH } from 'src/components/shared/review-form/constants/constants';

export const calculateMinCharacters = (charactersLength = 0): number => {
  if (charactersLength >= MIN_CHARACTER_LENGTH) {
    return MIN_CHARACTER_LENGTH;
  }

  return charactersLength;
};
