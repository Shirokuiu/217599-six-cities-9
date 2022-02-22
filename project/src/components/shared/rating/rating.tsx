import { RatingProps } from 'src/types/rating';

const DEFAULT_RATE = 5;
const MAX_PERCENT = 100;

const getPercentRate = ({
  rate,
  maxRate,
}: {
  rate: number;
  maxRate: number;
}): number => (rate * MAX_PERCENT) / maxRate;

const makeRateStyle = ({
  rate,
  maxRate,
}: {
  rate: number;
  maxRate: number;
}): string => `${getPercentRate({ rate, maxRate })}%`;

function Rating({ rate, maxRate }: RatingProps) {
  return (
    <>
      <span
        style={{
          width: makeRateStyle({ rate, maxRate: maxRate ?? DEFAULT_RATE }),
        }}
      />
      <span className="visually-hidden">Rating</span>
    </>
  );
}

export default Rating;
