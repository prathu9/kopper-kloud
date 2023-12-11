import './profile-card.style.css';

const ProfileCard = ({profileImg,profileRole, profileName, profileDescription, customStyle=''}) => {
    return(
        <div className={`profile-card-container ${customStyle}`}>
            <div className="profile-image-container">
                <img src={profileImg} alt="card avatar"/>
            </div>
            <div className="profile-info-container">
                <div className="profile-role">{profileRole}</div>
                <div className="profile-name">{profileName}</div>
                <div className="profile-description">{profileDescription}</div>
            </div>
        </div>
    )
}

export default ProfileCard;