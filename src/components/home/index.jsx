import './styles.css'
import { SendTweet } from '../send-tweet';
import { Tweet } from '../tweet';

export const Home = () => {
    
    return (
        <div className="home">
            <div className="header">
                <h3>Home</h3>
            </div>
        

            <div className="header-div">
                <SendTweet />
            </div>

            <div className="feed-container">
                <Tweet avatar="https://pbs.twimg.com/profile_images/1268673564800139267/Nph2nyZ6_400x400.jpg" displayname="Dylan" username="@dylanmede_" tweetText="Just finished my React Assignment!" />
                <Tweet avatar="https://media-exp1.licdn.com/dms/image/C4D03AQHA9CvCb_ea4w/profile-displayphoto-shrink_800_800/0/1600375872048?e=1642636800&v=beta&t=x4IK-8Ih33mo7L32tzhJ3Mtf0LPQm4FD6XpMjPKFPKU" displayname="Mark" username="@markmcgregor" tweetText="My React Assignment is wayyyy better than Dylan's LOL!" />
                <Tweet avatar="https://media-exp1.licdn.com/dms/image/C4E03AQFjsfZFqe9eng/profile-displayphoto-shrink_800_800/0/1581445786326?e=1642636800&v=beta&t=Zyo9m3npzNYxhPY600iW61p60sXv9lAiYGoZ9g0blsg" displayname="Tomas" username="@toooooomas" tweetText="I really need to mute Mark on discord, he's sending me too many GIFs.." />
                <Tweet avatar="https://pbs.twimg.com/profile_images/1268673564800139267/Nph2nyZ6_400x400.jpg" displayname="Dylan" username="@dylanmede_" tweetText="Off to work!" />
                <Tweet avatar="https://pbs.twimg.com/profile_images/1268673564800139267/Nph2nyZ6_400x400.jpg" displayname="Dylan" username="@dylanmede_" tweetText="Tired.." />
                <Tweet avatar="https://media-exp1.licdn.com/dms/image/C4D03AQHA9CvCb_ea4w/profile-displayphoto-shrink_800_800/0/1600375872048?e=1642636800&v=beta&t=x4IK-8Ih33mo7L32tzhJ3Mtf0LPQm4FD6XpMjPKFPKU" displayname="Mark" username="@markmcgregor" tweetText="La-La-La-La!" />
            </div>
        </div>
    );
}