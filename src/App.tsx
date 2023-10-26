// import { useEffect } from "react";
// import { collection, onSnapshot, query } from "firebase/firestore";
// import db from "./firebase";
// import { IComment } from "./types/types";

import Comments from "./components/comments/Comments";

function App() {
  // useEffect(() => {
  //   const q = query(collection(db, "comments"));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     const comments: IComment[] = [];
  //     querySnapshot.forEach((doc) => {
  //       comments.push({ ...doc.data(), id: doc.id } as IComment);
  //     });
  //     console.log("comments", comments);
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <main className="mx-auto max-w-[732px] px-4">
      <Comments />
    </main>
  );
}

export default App;
