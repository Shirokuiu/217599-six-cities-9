import { api } from 'src/store';
import { CommentsRoute } from 'src/services/comments/constants/constants';
import { Comment } from 'src/types/comment';
import { CommentBody } from 'src/types/comments-service';

class CommentsService {
  static async get(offerId: number): Promise<Comment[]> {
    const { data } = await api.get<Comment[]>(`${CommentsRoute.comments}/${offerId}`);

    return data;
  }

  static async add(offerId: number, body: CommentBody): Promise<Comment[]> {
    const { data } = await api.post<Comment[]>(`${CommentsRoute.comments}/${offerId}`, body);

    return data;
  }
}

export default CommentsService;
