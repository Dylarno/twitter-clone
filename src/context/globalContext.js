import React, {useState} from 'react';

export const GlobalContext = React.createContext(
    {
        tweets: [],
        addTweet: () => {},
    }
);

// Provider
export const GlobalContextProvider = (props) => {

    const [tweets, setTweets] = useState([]);

    const addTweet = (tweets) => {
        let oldTweets = tweets;
        oldTweets.push(tweets);
        setTweets(oldTweets);
    }

    return (
        <GlobalContext.Provider value={{tweets: tweets, addTweet: addTweet}}>
            {props.children}
        </GlobalContext.Provider>
    )
}