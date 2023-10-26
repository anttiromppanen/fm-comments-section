import Comment from "./Comment";
import data from "../../data/data.json";

function Comments() {
  return (
    <section className="my-8 flex flex-col gap-y-4">
      {data.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </section>
  );
}

export default Comments;
