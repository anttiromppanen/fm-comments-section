export interface IReply {
  id: string;
  createdAt: string;
  text: string;
  user: string;
  likes: number;
  whoHasLiked: string[];
  whoHasDisliked: string[];
  replyingTo: string;
}

export interface IComment {
  id: string;
  createdAt: string;
  text: string;
  user: string;
  likes: number;
  whoHasLiked: string[];
  whoHasDisliked: string[];
  repliesToThisComment: IReply[];
}
