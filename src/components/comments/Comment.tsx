import RestActionButton from "./RestActionButton";
import LikesModule from "./LikesModule";
import imageSelector from "../../helpers/helpers";
import { IComment, IReply } from "../../types/types";

const currentUser = "juliusomo";

type CommentType = IComment | IReply;

function Comment({ comment }: { comment: CommentType }) {
  const { user, createdAt, text, likes } = comment;

  const restActionButtonsSelector = () => {
    if (currentUser === user) {
      return (
        <div className="flex gap-x-4 sm:gap-x-6">
          <RestActionButton variant="delete" />
          <RestActionButton variant="edit" />
        </div>
      );
    }
    return <RestActionButton variant="reply" />;
  };

  return (
    <article
      className="
      flex w-full grid-cols-[88px_1fr] grid-rows-[auto_1fr_1fr] flex-col gap-y-4 rounded-lg 
    bg-white p-4 sm:grid sm:pl-0"
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-x-4">
          <img src={imageSelector(user)} alt={user} className="h-8 w-8" />
          <div className="flex flex-wrap items-center gap-x-4">
            <p className="text-userDarkBlue font-medium">{user}</p>
            {currentUser === user && (
              <div
                className="
            bg-userPrimary -ml-2 flex h-fit items-center justify-center p-1 text-xs leading-3
            text-white"
              >
                <span className="-mt-[2px]">you</span>
              </div>
            )}
            <p className="text-userGrayishBlue">{createdAt}</p>
          </div>
        </div>
        <div className="hidden items-center sm:flex">
          {restActionButtonsSelector()}
        </div>
      </div>

      <div className="text-userGrayishBlue row-span-2">
        {comment.replyingTo && (
          <span className="text-userPrimary font-medium">{`@${comment.replyingTo}`}</span>
        )}{" "}
        {text}
      </div>

      <div className="row-span-3 flex items-center justify-between sm:row-start-1 sm:row-end-4 sm:block">
        <LikesModule likes={likes} />
        <div className="sm:hidden">{restActionButtonsSelector()}</div>
      </div>
    </article>
  );
}

export default Comment;
