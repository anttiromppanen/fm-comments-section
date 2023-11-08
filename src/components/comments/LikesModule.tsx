import { doc } from "firebase/firestore";
import db from "../../firebase";
import useComments from "../../hooks/useComments";

interface Props {
  likes: number;
  whoHasLiked: string[];
  whoHasDisliked: string[];
  currentUser: string;
  commentId: string;
  variant: "comments" | "replies";
  isCreatedByCurrentUser: boolean;
}

function LikesModule({
  likes,
  currentUser,
  commentId,
  whoHasLiked,
  whoHasDisliked,
  variant,
  isCreatedByCurrentUser,
}: Props) {
  const commentOrReplyRef = doc(db, variant, commentId);
  const currentUserHasLiked = whoHasLiked.includes(currentUser);
  const currentUserHasDisliked = whoHasDisliked.includes(currentUser);
  const {
    handleAddLike,
    handleAddLikeWhenAlreadyLiked,
    handleAddWhenAlreadyDisliked,
    handleAddDislike,
    handleAddDislikeWhenAlreadyDisliked,
    handleAddDislikeWhenAlreadyLiked,
  } = useComments(db);

  const handleLike = async () => {
    if (isCreatedByCurrentUser) return null;

    if (currentUserHasLiked) {
      await handleAddLikeWhenAlreadyLiked({
        currentUser,
        likes,
        commentOrReplyRef,
      });
      return null;
    }

    if (currentUserHasDisliked) {
      await handleAddWhenAlreadyDisliked({
        currentUser,
        likes,
        commentOrReplyRef,
      });
      return null;
    }

    await handleAddLike({ currentUser, likes, commentOrReplyRef });
    return null;
  };

  const handleDislike = async () => {
    if (isCreatedByCurrentUser) return null;

    if (currentUserHasDisliked) {
      await handleAddDislikeWhenAlreadyDisliked({
        currentUser,
        likes,
        commentOrReplyRef,
      });
      return null;
    }

    if (currentUserHasLiked) {
      await handleAddDislikeWhenAlreadyLiked({
        currentUser,
        likes,
        commentOrReplyRef,
      });
      return null;
    }

    await handleAddDislike({ currentUser, likes, commentOrReplyRef });
    return null;
  };

  return (
    <div
      className="
        flex h-full items-center rounded-lg bg-userVeryLightGrey sm:mx-auto sm:h-auto sm:w-fit sm:flex-col"
    >
      <button
        type="button"
        onClick={handleLike}
        className={`px-4 py-2 font-medium text-userPrimaryVariant ${
          currentUserHasLiked && "!text-userGrayishBlue"
        }`}
      >
        +
      </button>
      <span className="font-medium text-userPrimary">{likes}</span>
      <button
        type="button"
        onClick={handleDislike}
        className={`px-4 py-2 font-medium text-userPrimaryVariant ${
          currentUserHasDisliked && "!text-userGrayishBlue"
        }`}
      >
        -
      </button>
    </div>
  );
}

export default LikesModule;
