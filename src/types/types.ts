interface IReply {
  id: string;
  createdAt: string;
  text: string;
  user: string;
  likes: number;
  replyingTo: string;
}

export interface IComment {
  id: string;
  createdAt: string;
  text: string;
  user: string;
  likes: number;
  replies: IReply[];
}
