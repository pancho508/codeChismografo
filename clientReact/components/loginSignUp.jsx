class LoginSignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modal: 0
        }
        this.showModal = this.showModal.bind(this)
    }
    showModal(num){
        this.setState({
            modal: num
        })
    }
    render(){
        console.log('props in loginSignup are ', this.props)
        return(
            <div className="box">
                <h1 className="centerH1">
                    <a onClick={() =>{this.showModal(0)}}>Login</a>  |
                    <a onClick={() =>{this.showModal(1)}}>  Sign up</a>
                </h1>
                {
                    this.state.modal === 0 ?
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
                        <form className="login" onSubmit={(e) => {this.props.singUp(e)}}>
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
    }
}