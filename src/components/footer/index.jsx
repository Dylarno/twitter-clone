import './styles.css'

export const Footer = (props) => {
    const {avatar, displayname, username} = props;

    return (
    <footer>
        <div className="account">
            <div className="avatar-footer">
                <img src={avatar} />
            </div>

            <div className="info">
                <div className="displayname">{displayname}</div>
                <div className="username">{username}</div>
            </div>
        </div>
    </footer>
    )
}