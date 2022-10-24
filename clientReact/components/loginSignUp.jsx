var LoginSignUp = (props) => (
    <div className="box">
        <h2 className="centerH1">
            <a onClick={() =>{props.switchLoginSignUp(0)}}>Login</a>  |
            <a onClick={() =>{props.switchLoginSignUp(1)}}>  Create Account</a>
        </h2>
        {
            props.login_signUp === 0 ?
            <div>
                <form className="login" onSubmit={(e) => {props.login(e)}}>
                    <label >E-mail:</label><br/>
                    <input type="text" id="email" name="email" /><br/><br/>
                    <label >Password:</label><br/>
                    <input type="text" id="password" name="password" /><br/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            :
            <div>
                <form className="login" onSubmit={(e) => {
                    e.preventDefault()
                    if(e.target.password.value === e.target.password2.value){
                        props.signUp(e)
                    } else {
                        alert('Passwords dont match')
                    }
                    }}>
                    <label >Name:</label><br/>
                    <input type="text" id="name" name="name" /><br/>
                    <label >E-mail:</label><br/>
                    <input type="text" id="email" name="email" /><br/><br/>
                    <label >Password:</label><br/>
                    <input type="text" id="password" name="password" /><br/>
                    <label >Confirm Password:</label><br/>
                    <input type="text" id="password2" name="password2" /><br/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        }
    </div>
)