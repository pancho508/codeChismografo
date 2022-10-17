var LoginSignUp = (props) => (
    <div className="box">
        <h1 className="centerH1">
            <a onClick={() =>{props.switchLoginSingUp(0)}}>Login</a>  |
            <a onClick={() =>{props.switchLoginSingUp(1)}}>  Sign up</a>
        </h1>
        {
            props.login_signUp === 0 ?
            <div>
                <form className="login" onSubmit={(e) => {}}>
                    <label for="email">E-mail:</label><br/>
                    <input type="text" id="email" name="email" /><br/><br/>
                    <label for="password">Password:</label><br/>
                    <input type="text" id="password" name="password" /><br/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            :
            <div>
                <form className="login" onSubmit={(e) => {props.singUp(e)}}>
                    <label for="name">Name:</label><br/>
                    <input type="text" id="name" name="name" /><br/>
                    <label for="email">E-mail:</label><br/>
                    <input type="text" id="email" name="email" /><br/><br/>
                    <label for="password">Password:</label><br/>
                    <input type="text" id="password" name="password" /><br/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        }

    </div>
)