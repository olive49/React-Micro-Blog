import { createContext }from 'react';

const TweetsContext = createContext({
    userName: '',
    usersArray: [],
    currentUser: null,
    setCurrentUser: () => {},
    logout: () => {},
})

export default TweetsContext