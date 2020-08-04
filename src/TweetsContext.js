import { createContext } from "react";

const TweetsContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export default TweetsContext;
