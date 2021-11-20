import React, {useState} from 'react';
import { Tweet } from '../tweet';

export const GlobalContext = React.createContext(
    {
        tweets: [<Tweet />, <Tweet />, <Tweet />],
        addTweet: () => {console.log("default")},
    }
);

// Provider
export const GlobalContextProvider = (props) => {

    const [tweets, setTweets] = useState([]);

    const addTweet = (tweet) => {
        let oldTweets = tweets;
        oldTweets.unshift(tweet);
        setTweets(oldTweets);
    }

    return (
        <GlobalContext.Provider value={{tweets: tweets, addTweet: addTweet}}>
            {props.children}
        </GlobalContext.Provider>
    )
}