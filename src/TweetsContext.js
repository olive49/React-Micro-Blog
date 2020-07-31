import { createContext }from 'react';

const TweetsContext = createContext({
    userName: '',
    usersArray: [],
})

export default TweetsContext