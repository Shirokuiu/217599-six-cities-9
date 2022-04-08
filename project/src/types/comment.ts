export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: CommentUser;
};

export type CommentUser = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};
