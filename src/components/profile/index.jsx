import './styles.css'
import { Tweet } from '../tweet';

export const Profile = (props) => {
    const {avatar, displayname, username} = props;
    
    return (
        <div className="profile">
            <div className="top-container">

                <div className="banner">
                    <div className="avatar-profile">
                        <img className="img-profile" src={avatar} />
                    </div>
                </div>

                <div className="bio">
                    <h2>{displayname}</h2>
                    <p>{username}</p>
                </div>
            </div>

            <Tweet avatar="https://pbs.twimg.com/profile_images/1268673564800139267/Nph2nyZ6_400x400.jpg" displayname="Dylan" username="@dylanmede_" tweetText="Just finished my React Assignment!" />
            <Tweet avatar="https://pbs.twimg.com/profile_images/1268673564800139267/Nph2nyZ6_400x400.jpg" displayname="Dylan" username="@dylanmede_" tweetText="Off to work!" />
            <Tweet avatar="https://pbs.twimg.com/profile_images/1268673564800139267/Nph2nyZ6_400x400.jpg" displayname="Dylan" username="@dylanmede_" tweetText="Tired.." />
        </div>
        
    );
}