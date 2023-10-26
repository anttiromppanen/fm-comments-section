import LikesModule from "./LikesModule";
import replyIcon from "../../assets/images/icon-reply.svg";
import imageSelector from "../../helpers/helpers";
import { IComment } from "../../types/types";

function Comment({ comment }: { comment: IComment }) {
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
          <p className="text-userDarkBlue font-medium">{comment.user}</p>
          <p className="text-userGrayishBlue">{comment.createdAt}</p>
        </div>
        <div className="hidden items-center sm:flex">
          <button
            type="button"
            className="flex items-center justify-center gap-x-1"
          >
            <img src={replyIcon} alt="Reply" />
            <span>Reply</span>
          </button>
        </div>
      </div>

      <div className="text-userGrayishBlue row-span-2">{comment.text}</div>

      <div className="row-span-3 flex items-center justify-between sm:row-start-1 sm:row-end-4 sm:block">
        <LikesModule likes={comment.likes} />
        <div className="sm:hidden">
          <button type="button" className="flex items-center gap-x-1">
            <img src={replyIcon} alt="Reply" />
            <span>Reply</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default Comment;
