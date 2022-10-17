class App extends React.Component {
    constructor(){
        super()
        this.state = {
            login_signUp: 0,
            page : 0,
            qArr : [],
            question : null,
            user: null
        }
        this.changePage = this.changePage.bind(this)
        this.getQuestions = this.getQuestions.bind(this)
        this.login = this.login.bind(this)
        this.onQuestionClick = this.onQuestionClick.bind(this)
        this.setUser = this.setUser.bind(this)
        this.singUp = this.singUp.bind(this)
        this.switchLoginSingUp = this.switchLoginSingUp.bind(this)
        this.renderSwitch = this.renderSwitch.bind(this)

    }
    changePage(pageNum){
        this.setState({
            page: pageNum
        })
    }
    getQuestions(){
        axios.get('/user-management/question')
            .then((res) => {
                this.setState({
                    qArr: res.data
                })
            })
            .catch((err)=>{
                console.error('pancho you go an error', err)
            })
    }
    login(){
        //should hit the server and query the db
        //Auth the user
        //use JWT for session
        //redirect to homepage
    }
    onQuestionClick(e, qObj){
        console.log('onQuestionClick invoked', e, qObj)
        this.setState({
            question: qObj
        }, () => {
            this.setState({page:2})
        })
    }
    setUser(userObj){
        this.setState({
            user: userObj
        })
    }
    singUp(e){
        e.preventDefault()
        const userObj = {
            email: e.target.email.value,
            name: e.target.name.value,
            password: e.target.password.value,
          }
        axios.post('/user-management/user', userObj)
            .then((response) => {
              this.setUser(response.data)
              this.getQuestions()
              this.changePage(1)
            }, (error) => {
              console.log("ohh no Pancho un error", error);
            });
    }
    switchLoginSingUp(num){
        this.setState({
            login_signUp: num
        })
    }
    renderSwitch(loc){
        switch(loc){
            case 0:
                return <LoginSignUp singUp={this.singUp} login_signUp={this.state.login_signUp} switchLoginSingUp={this.switchLoginSingUp}/>
            case 1:
                return <Home qArr={this.state.qArr} onQuestionClick={this.onQuestionClick}/>
            case 2:
                return <Question question={this.state.question} />    
        }
    }
    render(){

        return(
            <div>
                <Header user={this.state.user} />
                {this.renderSwitch(this.state.page)}
                <Footer />
            </div>
        )
    }
}