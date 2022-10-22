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
        this.addQuestion = this.addQuestion.bind(this)
    }
    addQuestion(e){
        e.preventDefault()
        var questionObj = {
            question: e.target.question.value,
            correctAnswer: e.target.correctAnswer.value,
            wrongAnswer1: e.target.wrongAnswer1.value, 
            wrongAnswer2: e.target.wrongAnswer2.value,
            wrongAnswer3: e.target.wrongAnswer3.value
        }
        axios.post('/user-management/question', questionObj)
        .then((res) => {
            console.log('addQuestion RES =>', res)
            this.getQuestions()
            this.changePage(1)
        })
        .catch((error) => {
            console.log("ohh no Pancho un error", error);
        })
        console.log('addQuestion questionObj=>', questionObj)
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
    login(e){
        //should hit the server and query the db
        //Auth the user
        //use JWT for session
        //redirect to homepage
        e.preventDefault()
        const userObj = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        console.log('this is the userObj', typeof userObj)

        axios.get('/user-management/userLogin', {params: userObj})
        .then((response) => {
          console.log('this is the current user =>', response.data)
          if(response.data.auth === true){
            this.setUser(response.data)
            this.getQuestions()
            this.changePage(1)
          } else {
            alert('Login Falied')
          }

        })
        .catch((error) => {
          console.log("ohh no Pancho un error", error);
        });
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
            })
            .catch((error) => {
                (error) => {
                    console.log("ohh no Pancho un error", error);
                }
            })
    }
    switchLoginSingUp(num){
        this.setState({
            login_signUp: num
        })
    }
    renderSwitch(loc){
        switch(loc){
            case 0:
                return <LoginSignUp singUp={this.singUp} login={this.login} login_signUp={this.state.login_signUp} switchLoginSingUp={this.switchLoginSingUp}/>
            case 1:
                return <Home key={1} qArr={this.state.qArr} onQuestionClick={this.onQuestionClick}/>
            case 2:
                return <Question question={this.state.question} />
            case 3: 
                return <CreateQuestion addQuestion={this.addQuestion} />
        }
    }
    render(){

        return(
            <div>
                <Header user={this.state.user}  changePage={this.changePage}/>
                {this.renderSwitch(this.state.page)}
                <Footer />
            </div>
        )
    }
}