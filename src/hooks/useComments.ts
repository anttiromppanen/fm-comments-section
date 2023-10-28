import {
  Firestore,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { IComment } from "../types/types";

const useComments = (db: Firestore) => {
  const [comments, setComments] = useState<IComment[]>([]);

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

  return comments;
};

export default useComments;
