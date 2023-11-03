export interface IReply {
  id: string;
  createdAt: string;
  text: string;
  user: string;
  whoHasLiked: string[];
  replyingTo: string;
}

export interface IComment {
  id: string;
  createdAt: string;
  text: string;
  user: string;
  whoHasLiked: string[];
}
