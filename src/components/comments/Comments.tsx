import Comment from "./Comment";
import useComments from "../../hooks/useComments";
import db from "../../firebase";

function Comments() {
  const comments = useComments(db);
  console.log(comments);
  return (
    // COMMENT
    <section className="my-8 flex flex-col gap-y-4">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      {/* REPLIES TO COMMENT */}
      <div className="flex flex-col gap-y-4 border-l-2 pl-4 md:ml-11 md:pl-11" />
    </section>
  );
}

export default Comments;
