import {
  DocumentData,
  DocumentReference,
  Firestore,
  arrayRemove,
  arrayUnion,
  collection,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { IComment } from "../types/types";

interface IActionArgs {
  currentUser: string;
  likes: number;
  commentsRef: DocumentReference<DocumentData, DocumentData>;
}

const useComments = (db: Firestore) => {
  const [comments, setComments] = useState<IComment[]>([]);

  const addLike = async ({ currentUser, likes, commentsRef }: IActionArgs) => {
    await updateDoc(commentsRef, {
      likes: likes + 1,
      whoHasLiked: arrayUnion(currentUser),
    });
  };

  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    const unsubsrcribe = onSnapshot(q, (querySnapshot) => {
      const commentsArr: IComment[] = [];
      querySnapshot.forEach((doc) => {
        commentsArr.push({ ...doc.data(), id: doc.id } as IComment);
      });

      setComments(commentsArr);
    });
    return () => unsubsrcribe();
  }, [db]);

  return { comments, addLike };
};

export default useComments;
