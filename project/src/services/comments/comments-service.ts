import { api } from 'src/store';
import { CommentsRoute } from 'src/services/comments/constants/constants';
import { Comment } from 'src/types/comment';

class CommentsService {
  static async get(offerId: number): Promise<Comment[]> {
    const { data } = await api.get<Comment[]>(`${CommentsRoute.comments}/${offerId}`);

    return data;
  }
}

export default CommentsService;
