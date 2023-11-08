export interface IComment {
  id: string;
  createdAt: string;
  text: string;
  user: string;
  likes: number;
  whoHasLiked: string[];
  whoHasDisliked: string[];
}

export interface IReply extends IComment {
  replyingTo?: { commentId: string; replyingToUser: string };
}
