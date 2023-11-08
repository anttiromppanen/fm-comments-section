import {
  Firestore,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { IReply } from "../types/types";

const useReplies = (db: Firestore) => {
  const [replies, setReplies] = useState<IReply[]>([]);

  useEffect(() => {
    const q = query(collection(db, "replies"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const repliesArr: IReply[] = [];
      querySnapshot.forEach((doc) => {
        repliesArr.push({ ...doc.data(), id: doc.id } as IReply);
      });
      setReplies(repliesArr);
    });
    return () => unsubscribe();
  }, [db]);

  return { replies };
};

export default useReplies;
