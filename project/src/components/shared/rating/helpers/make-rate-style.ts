import { MAX_PERCENT } from 'src/components/shared/rating/constants/constants';

const getPercentRate = ({
  rate,
  maxRate,
}: {
  rate: number;
  maxRate: number;
}): number => (rate * MAX_PERCENT) / maxRate;

export const makeRateStyle = ({
  rate,
  maxRate,
}: {
  rate: number;
  maxRate: number;
}): string => `${getPercentRate({ rate, maxRate })}%`;
