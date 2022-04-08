import { getPercentRate } from 'src/components/shared/rating/helpers/get-percent-rate';

export const makeRateStyle = ({
  rate,
  maxRate,
  round,
}: {
  rate: number;
  maxRate: number;
  round: boolean;
}): string => `${getPercentRate({ rate, maxRate, round })}%`;
