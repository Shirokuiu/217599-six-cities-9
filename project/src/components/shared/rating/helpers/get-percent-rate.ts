import { MAX_PERCENT } from 'src/components/shared/rating/constants/constants';

export const getPercentRate = ({
  rate,
  maxRate,
  round = false,
}: {
  rate: number;
  maxRate: number;
  round: boolean;
}): number => {
  const parsedRate = round ? Math.round(rate) : rate;

  return (parsedRate * MAX_PERCENT) / maxRate;
};
