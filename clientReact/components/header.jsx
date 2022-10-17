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
        <a href="/login" className="loginButton active">IDK yet</a>
    </div>
)