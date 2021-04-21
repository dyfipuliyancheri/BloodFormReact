import React from "react";
import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

function ListView() {
  const auth = app.auth();
  const [user] = useAuthState(auth);
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/view",
    signInOptions: [app.auth.EmailAuthProvider.PROVIDER_ID],
  };
  return (
    <div>
      <div classname="App">
        {user ? (
          <List />
        ) : (
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        )}
      </div>
    </div>
  );
}

function List() {
  const firestore = app.firestore();
  const messagesRef = firestore.collection("users");
  const query = messagesRef.limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  return <div>{JSON.stringify(messages)}</div>;
}

export default ListView;
