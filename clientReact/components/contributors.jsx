var Contributors = (props) => {
    if(props.users.length > 0){
        return (
            <div className="playerslist">
                <div className="table">
                    <h3>October's Top Contributors</h3>
                </div>
                <div className="list">
                    {props.users.map((user, index) => (
                        <div className="contributorCard" key={index}>
                            <div className="background">
                                <img className="background-img" src="" alt="" />
                            </div>
                            <div className="content">
                                <span> {index + 1}</span>
                                <div className="profile">
                                    <img className="profile-img" src={"https://ih1.redbubble.net/image.3144755335.7602/flat,128x128,075,t.jpg"} alt="profileImage" />
                                </div>
                                <div className="username">
                                    <h4 className="name">{user.name}</h4>
                                    <p className='location'></p>
                                </div>
                                <div className="info">
                                    <p className="description">I like tacos and coffee!!</p>
                                </div>
                                <div className="labels">
                                    <div className="label">
                                        <p>XP:</p>
                                        <h4 className="XP">{Math.floor(Math.random() * 999)}</h4>
                                    </div>
                                    <div className="label">
                                        <p>likes:</p>
                                        <h4 className="likes">{Math.floor(Math.random() * 999)}</h4>
                                    </div>
                                    <div className="label">
                                        <p>Resources:</p>
                                        <h4 className="Resources">{Math.floor(Math.random() * 999)}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    } 
}




