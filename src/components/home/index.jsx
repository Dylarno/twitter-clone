import './styles.css'
import { SendTweet } from '../send-tweet';

export const Home = () => {
    

    return (
        <div className="home">
            <div className="header">
                <h2>Home</h2>
            </div>
        

            <div className="header-div">
                <SendTweet />
            </div>
        </div>
    );
}