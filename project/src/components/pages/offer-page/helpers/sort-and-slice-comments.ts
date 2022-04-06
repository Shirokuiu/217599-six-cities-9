import { MAX_REVIEWS_COUNT } from 'src/components/pages/offer-page/constants/constants';
import { Comment } from 'src/types/comment';

export const sortAndSliceComments = (comments: Comment[]) =>
  [...comments]
    .sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      }

      if (a.date > b.date) {
        return 1;
      }

      return 0;
    })
    .slice(0, MAX_REVIEWS_COUNT);
