import Comment from "./Comment";
import useComments from "../../hooks/useComments";
import db from "../../firebase";
import { IReply } from "../../types/types";
import useReplies from "../../hooks/useReplies";

function Comments() {
  const { comments } = useComments(db);
  const { replies } = useReplies(db);

  return (
    // COMMENT
    <section className="my-8 flex flex-col gap-y-4">
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment comment={comment} variant="comments" />
          {/* REPLIES TO COMMENT */}
          <div className="mt-4 flex flex-col gap-y-4 border-l-2 pl-4 md:ml-11 md:pl-11">
            {replies.filter((reply: IReply) => reply.replyingTo === comment.id)
              .length > 0 &&
              replies
                .filter((reply: IReply) => reply.replyingTo === comment.id)
                .map((reply: IReply) => (
                  <Comment key={reply.id} comment={reply} variant="replies" />
                ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Comments;
