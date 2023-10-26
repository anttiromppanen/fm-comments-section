import RestActionButton from "./RestActionButton";
import LikesModule from "./LikesModule";
import imageSelector from "../../helpers/helpers";
import { IComment, IReply } from "../../types/types";

function Comment({ comment }: { comment: IComment | IReply }) {
  return (
    <article
      className="
      flex w-full grid-cols-[88px_1fr] grid-rows-[auto_1fr_1fr] flex-col gap-y-4 rounded-lg 
    bg-white p-4 sm:grid"
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-x-4">
          <img
            src={imageSelector(comment.user)}
            alt={comment.user}
            className="h-8 w-8"
          />
          <div className="flex flex-wrap gap-x-4">
            <p className="text-userDarkBlue font-medium">{comment.user}</p>
            <p className="text-userGrayishBlue">{comment.createdAt}</p>
          </div>
        </div>
        <div className="hidden items-center sm:flex">
          <RestActionButton variant="reply" />
        </div>
      </div>

      <div className="text-userGrayishBlue row-span-2">{comment.text}</div>

      <div className="row-span-3 flex items-center justify-between sm:row-start-1 sm:row-end-4 sm:block">
        <LikesModule likes={comment.likes} />
        <div className="sm:hidden">
          <RestActionButton variant="reply" />
        </div>
      </div>
    </article>
  );
}

export default Comment;
