import './styles.css'
import { SendTweet } from '../send-tweet';
import { Tweet } from '../tweet';
import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

export const Home = () => {

    const globalState = useContext(GlobalContext);

    const [tweetElements, setTweetElements] = useState([]);

    useEffect (() => {
        const tweetElems = globalState.tweets.map( () => {
            return (
                <Tweet />
            )
        })
        setTweetElements(tweetElems);
        console.log("Added");
    }, [globalState.tweets])
    
    return (
        <div className="home">
            <div className="header">
                <h2>Home</h2>
            </div>
        

            <div className="header-div">
                <SendTweet />
            </div>

            <div className="feed-container">
                {tweetElements}
            </div>
        </div>
    );
}