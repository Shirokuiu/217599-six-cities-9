import { RatingProps } from 'src/types/rating';
import { DEFAULT_RATE } from 'src/components/shared/rating/constants/constants';
import { makeRateStyle } from 'src/components/shared/rating/helpers/make-rate-style';

function Rating({ rate, maxRate }: RatingProps) {
  return (
    <>
      <span
        style={{
          width: makeRateStyle({ rate, maxRate: maxRate ?? DEFAULT_RATE }),
        }}
        data-testid="rate-style"
      />
      <span className="visually-hidden">Rating</span>
    </>
  );
}

export default Rating;
