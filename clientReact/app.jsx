class App extends React.Component {
    constructor(){
        super()
        this.state = {
            page : 0,
            qArr : [],
            question : null,
            user: null
        }
        this.changePage = this.changePage.bind(this)
        this.login = this.login.bind(this)
        this.singUp = this.singUp.bind(this)
        this.getQuestions = this.getQuestions.bind(this)
        this.onQuestionClick = this.onQuestionClick.bind(this)
        this.setUser = this.setUser.bind(this)
    }
    changePage(pageNum){
        this.setState({
            page: pageNum
        })
    }
    setUser(userObj){
        this.setState({
            user: userObj
        })
    }
    getQuestions(){
        axios.get('/user-management/question')
            .then((res) => {
                console.log('this is the res pancho', res)
                this.setState({
                    qArr: res.data
                })
            })
            .catch((err)=>{
                console.log('pancho you go an error', err)
            })
    }
    onQuestionClick(e, qObj){
        console.log('onQuestionClick invoked', e, qObj)
        this.setState({
            question: qObj
        }, () => {
            this.setState({page:2})
        })
    }
    login(){
        //should hit the server and query the db
        //Auth the user
        //use JWT for session
        //redirect to homepage
    }
    singUp(e){
        e.preventDefault()
        const userObj = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
          }
        console.log('signup method event here', e, userObj)
        axios.post('/user-management/user', userObj)
            .then((response) => {
              this.setUser(response.data) 
              this.changePage(1)
              this.getQuestions()
            }, (error) => {
              console.log("ohh no Pancho un error", error);
            });
        //hit server passing in form data
        // server should save the user 
        // on success res we should take to home 
    }
    render(){
        return(
            <div>
                <Header user={this.state.user} />
                {/* <button onClick={(e) => {
                    this.changePage(1)
                }} >Change</button> */}
                { this.state.page === 0 ? <LoginSignUp singUp={this.singUp}/> : <div></div> }
                { this.state.page === 1 ? <Home qArr={this.state.qArr} onQuestionClick={this.onQuestionClick}/> : <div></div> }
                { this.state.page === 2 ? <Question question={this.state.question} /> : <div></div> }
                <Footer />
            </div>
        )
    }
}