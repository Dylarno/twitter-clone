import './styles.css'
import { SendTweet } from '../send-tweet';
import { Tweet } from '../tweet';

export const Home = () => {
    
    return (
        <div className="home">
            <div className="header">
                <h2>Home</h2>
            </div>
        

            <div className="header-div">
                <SendTweet />
            </div>

            <div className="feed-container">

                <Tweet />
                <Tweet />
                <Tweet />
            </div>
        </div>
    );
}