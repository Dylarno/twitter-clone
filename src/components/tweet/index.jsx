import './styles.css';

export const Tweet = (props) => {
    const {avatar, displayname, username, tweetText} = props;

    return (
        <div className="tweet-div">

            <div className="main">
                <div className="avatar-tweet">
                    <img className="avatar-picture" src={avatar} />
                </div>

                    <div className="text-container">

                        <div className="account-info">
                            <div className="d-name">{displayname}</div>
                            <div className="u-name">{username}</div>
                        </div>
                        
                        <textarea className="tweet-text" type="text" rows="5" readOnly>{tweetText}</textarea>
                    
                    </div>
            </div>
            
            <div className="buttons">

                <span></span>
                <span></span>
                <span></span>

            </div>

        </div>
    );
}