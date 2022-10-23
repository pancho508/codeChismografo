var Header = (props) => (
    <div className="header">
        <a className="logo">Chismografo</a>
        {
            props.user ?
                <div className="header-right">
                    <a className=""
                        onClick={(e) => {
                            props.changePage(1)
                        }}
                    >Home</a>
                    <a className=""
                        onClick={(e) => {
                            props.changePage(3)
                        }}
                    >Create a Question</a>
                </div> : <div></div>
        }
        {
            props.user ?
                <a className="loginButton active">Log Out</a>
                :
                <a className="loginButton active">Sign In</a>
        }
        {
            props.user ?
                <p className="user">Welcome, {props.user.name}</p>
                : <div></div>
        }
    </div>

)