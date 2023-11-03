import RestActionButton from "./RestActionButton";
import LikesModule from "./LikesModule";
import imageSelector from "../../helpers/helpers";
import { IComment, IReply } from "../../types/types";

const currentUser = "juliusomo";

type CommentType = IComment | IReply;

function Comment({ comment }: { comment: CommentType }) {
  const { user, createdAt, text, whoHasLiked } = comment;

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
            <p className="font-medium text-userDarkBlue">{user}</p>
            {currentUser === user && (
              <div
                className="
            -ml-2 flex h-fit items-center justify-center bg-userPrimary p-1 text-xs leading-3
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

      <div className="row-span-2 text-userGrayishBlue">{text}</div>

      <div className="row-span-3 flex items-center justify-between sm:row-start-1 sm:row-end-4 sm:block">
        <LikesModule likes={whoHasLiked.length} />
        <div className="sm:hidden">{restActionButtonsSelector()}</div>
      </div>
    </article>
  );
}

export default Comment;
