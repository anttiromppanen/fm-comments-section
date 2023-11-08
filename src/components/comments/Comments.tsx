import Comment from "./Comment";
import useComments from "../../hooks/useComments";
import db from "../../firebase";
import { IReply } from "../../types/types";

function Comments() {
  const { comments } = useComments(db);

  return (
    // COMMENT
    <section className="my-8 flex flex-col gap-y-4">
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment comment={comment} />

          {/* REPLIES TO COMMENT */}
          {comment.repliesToThisComment.map((reply: IReply) => (
            <div
              key={reply.id}
              className="mt-4 flex flex-col gap-y-4 border-l-2 pl-4 md:ml-11 md:pl-11"
            >
              <Comment comment={reply} />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default Comments;
