import './styles.css';

export const Tweet = () => {


    return (
        <div className="tweet-div">

            <div className="main">
                <div className="avatar-tweet">
                    <img className="avatar-picture" src="https://pbs.twimg.com/profile_images/1268673564800139267/Nph2nyZ6_400x400.jpg" />
                </div>

                    <div className="text-container">

                        <div className="account-info">
                            <div className="d-name">Dylan</div>
                            <div className="u-name">@dylanmede</div>
                        </div>
                        
                        <textarea className="tweet-text" type="text" rows="5" readOnly>Tomas is cute, Mark is cute, Fred is cute, Quinn is cute, Dylan is cute. Tomas is cute, Mark is cute, Fred is cute, Quinn is cute, Dylan is cute. Tomas is cute, Mark is cute, Fred is cute, Quinn is cute, Dylan is cute. Tomas is cute, Mark is cute, Fred is cute, Quinn is cute, Dylan is cute.</textarea>
                    
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