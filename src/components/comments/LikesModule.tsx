import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import db from "../../firebase";
import useComments from "../../hooks/useComments";

interface Props {
  likes: number;
  whoHasLiked: string[];
  whoHasDisliked: string[];
  currentUser: string;
  commentId: string;
}

function LikesModule({
  likes,
  currentUser,
  commentId,
  whoHasLiked,
  whoHasDisliked,
}: Props) {
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
    const commentsRef = doc(db, "comments", commentId);

    if (currentUserHasLiked) {
      await handleAddLikeWhenAlreadyLiked({ currentUser, likes, commentsRef });
      return null;
    }

    if (currentUserHasDisliked) {
      await handleAddWhenAlreadyDisliked({ currentUser, likes, commentsRef });
      return null;
    }

    await handleAddLike({ currentUser, likes, commentsRef });
    return null;
  };

  const handleDislike = async () => {
    const commentsRef = doc(db, "comments", commentId);

    if (currentUserHasDisliked) {
      await handleAddDislikeWhenAlreadyDisliked({
        currentUser,
        likes,
        commentsRef,
      });
      return null;
    }

    if (currentUserHasLiked) {
      await handleAddDislikeWhenAlreadyLiked({
        currentUser,
        likes,
        commentsRef,
      });
      return null;
    }

    await handleAddDislike({ currentUser, likes, commentsRef });
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
