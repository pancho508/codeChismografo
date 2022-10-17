var Header = (props) => (
    <div className="header">
        <a className="logo">Chismografo</a>
        {
            props.user ? 
            <div className="header-right">
                <a className="" href="/">Home</a>
                <a className="" href="/question">Create a Question</a>
                <p>Welcome, {props.user.name}</p>
            </div> : <div></div>
        }
        {
            props.user ?
            <a className="loginButton active">Sign Out</a> :
            <div>
                <a className="loginButton active">Log In</a> |
                <a className="loginButton active">  createAccount</a>
            </div>
        }
    </div>
)