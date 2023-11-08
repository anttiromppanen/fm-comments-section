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
  const { addLike } = useComments(db);
  const currentUserHasLiked = whoHasLiked.includes(currentUser);
  const currentUserHasDisliked = whoHasDisliked.includes(currentUser);

  const handleLike = async () => {
    const commentsRef = doc(db, "comments", commentId);

    if (currentUserHasLiked) {
      await updateDoc(commentsRef, {
        likes: likes - 1,
        whoHasLiked: arrayRemove(currentUser),
      });
      return null;
    }

    if (currentUserHasDisliked) {
      await updateDoc(commentsRef, {
        likes: likes + 2,
        whoHasDisliked: arrayRemove(currentUser),
        whoHasLiked: arrayUnion(currentUser),
      });
      return null;
    }

    await addLike({ currentUser, likes, commentsRef });

    return null;
  };

  const handleDislike = async () => {
    const commentsRef = doc(db, "comments", commentId);

    if (currentUserHasDisliked) {
      await updateDoc(commentsRef, {
        likes: likes + 1,
        whoHasDisliked: arrayRemove(currentUser),
      });
      return null;
    }

    if (currentUserHasLiked) {
      await updateDoc(commentsRef, {
        likes: likes - 2,
        whoHasLiked: arrayRemove(currentUser),
        whoHasDisliked: arrayUnion(currentUser),
      });
      return null;
    }

    await updateDoc(commentsRef, {
      likes: likes - 1,
      whoHasDisliked: arrayUnion(currentUser),
    });

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
