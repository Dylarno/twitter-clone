import './styles.css'

export const Footer = (props) => {
    const {avatar, displayname, username} = props;

    return (
    <footer>
        <button className="account">
            <div className="avatar">
                <img src={avatar} />
            </div>

            <div className="info">
                <div className="displayname">{displayname}</div>
                <div className="username">{username}</div>
            </div>
        </button>
    </footer>
    )
}