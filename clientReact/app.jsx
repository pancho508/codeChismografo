class App extends React.Component {
    constructor(){
        super()
        this.state = {
            comments: [],
            login_signUp: 0,
            page : 0,
            qArr : [],
            question : null,
            questionResult: null,
            user: null,
            users: []
        }
        this.addComment = this.addComment.bind(this)
        this.addQuestion = this.addQuestion.bind(this)
        this.answerQuestion = this.answerQuestion.bind(this)
        this.changePage = this.changePage.bind(this)
        this.getComments = this.getComments.bind(this)
        this.getQuestions = this.getQuestions.bind(this)
        this.getUsers = this.getUsers.bind(this)
        this.login = this.login.bind(this)
        this.onQuestionClick = this.onQuestionClick.bind(this)
        this.setUser = this.setUser.bind(this)
        this.signUp = this.signUp.bind(this)
        this.switchLoginSignUp = this.switchLoginSignUp.bind(this)
        this.shuffle = this.shuffle.bind(this)
        this.renderSwitch = this.renderSwitch.bind(this)
    }
    addComment(e){
        e.preventDefault()
        const commentObj = {
            ...this.state.questionResult,
            text: e.target.addComment.value,
            like: 0,
            dislike: 0,
            createdBy: this.state.user.name,
            date: new Date()
        }
        console.log('cuh addComment inv commentObj', commentObj)
        axios.post('/user-management/comment', commentObj)
            .then((res) => {
                console.log('addQuestion RES =>', res)
                this.getComments(this.state.questionResult.question_uuid)
            })
            .catch((error) => {
                console.log("ohh no Pancho un error", error)
            })
    }
    addQuestion(e){
        e.preventDefault()
        var answerObj = [
            e.target.correctAnswer.value,
            e.target.wrongAnswer1.value,
            e.target.wrongAnswer2.value,
            e.target.wrongAnswer3.value,
        ]
        var questionObj = {
            question: e.target.question.value,
            answers: answerObj,
            correctAnswer: e.target.correctAnswer.value,
            wrongAnswer1: e.target.wrongAnswer1.value, 
            wrongAnswer2: e.target.wrongAnswer2.value,
            wrongAnswer3: e.target.wrongAnswer3.value,
            imageURL: e.target.imageURL.value,
            topic: e.target.topic.value,
            articleLink: e.target.articleLink.value,
            createdBy: this.state.user.name
        }
        axios.post('/user-management/question', questionObj)
        .then((res) => {
            console.log('addQuestion RES =>', res)
            this.getQuestions()
            this.changePage(1)
        })
        .catch((error) => {
            console.log("ohh no Pancho un error", error)
        })
    }
    answerQuestion(e, question_uuid){
        e.preventDefault()
        const relObj = {
            user_uuid: this.state.user.uuid,
            question_uuid: question_uuid,
            correct: e.target.chosenAnswer.value === "correctAnswer" ? true : false
        }
        axios.post('/user-management/answerQuestion', relObj)
            .then((res) => {
                console.log('this is the res', res)
                //need to get comments before we render the page
                //Be4 we need to create a add comment form to summit the form it self 
                // then we could work on the question_up_down end point to like and dislike
                this.setState({
                    questionResult: relObj
                }, () =>{
                    this.changePage(4)
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    changePage(pageNum){
        this.setState({
            page: pageNum
        })
    }
    getComments(qUUID){
        console.log('this is the qUUID UUID PANCHO', qUUID)
        axios.get('/user-management/comment', {params: {question_uuid: qUUID}})
            .then((res) => {
                console.log('addQuestion RES GET =>', res)
                this.setState({
                    comments: res.data
                })
            })
            .catch((error) => {
                console.log("ohh no Pancho un error", error)
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
    getUsers(){
        axios.get('/user-management/user')
            .then((res) => {
                console.log('getUsers RES pancho', res)
                this.setState({
                    users: res.data
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
        axios.get('/user-management/userLogin', {params: userObj})
        .then((response) => {
          console.log('this is the current user =>', response.data)
          if(response.data.auth === true){
            this.getUsers()
            this.setUser(response.data)
            this.getQuestions()
            this.changePage(1)
            // window.localStorage.setItem('secreto', 'byJoanSebastian')
            // window.localStorage.getItem('secreto')
          } else {
            alert('Login Falied')
          }

        })
        .catch((error) => {
          console.log("ohh no Pancho un error", error)
        })
    }
    onQuestionClick(e, q){
        const qObj ={...q}
        console.log('onQuestionClick invoked', e, qObj)
        const aArr = [
            {correct:true, text: qObj.answers[0]},
            {correct:false, text: qObj.answers[1]},
            {correct:false, text: qObj.answers[2]},
            {correct:false, text: qObj.answers[3]}
        ]
        console.log('qArr ===>', JSON.stringify(aArr))
        const mixQArr = this.shuffle(aArr)
        console.log('mixQArr ===>', mixQArr)
        qObj.answers = mixQArr
        this.setState({
            question: qObj
        }, () => {
            this.getComments(qObj.uuid)
            this.setState({page:2})
        })
    }
    setUser(userObj){
        this.setState({
            user: userObj
        })
    }
    signUp(e){
        const userObj = {
            email: e.target.email.value,
            name: e.target.name.value,
            password: e.target.password.value,
          }
        axios.post('/user-management/user', userObj)
            .then((response) => {
              console.log('current user =>', response.data)
              this.getUsers()
              this.setUser(response.data)
              this.getQuestions()
              this.changePage(1)
            })
            .catch((error) => {
                (error) => {
                    console.log("ohh no Pancho un error", error)
                }
            })
    }
    shuffle(array) {
        let currentIndex = array.length,  randomIndex
      
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex--
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]]
        }
      
        return array
      }
    switchLoginSignUp(num){
        this.setState({
            login_signUp: num
        })
    }
    renderSwitch(loc){
        switch(loc){
            case 0:
                return <LoginSignUp 
                    signUp={this.signUp} 
                    login={this.login} 
                    login_signUp={this.state.login_signUp} 
                    switchLoginSignUp={this.switchLoginSignUp}
                    />
            case 1:
                return <Home 
                    qArr={this.state.qArr} 
                    onQuestionClick={this.onQuestionClick}
                    />
            case 2:
                return <Question
                    answerQuestion={this.answerQuestion} 
                    question={this.state.question} 
                    />
            case 3: 
                return <CreateQuestion 
                    addQuestion={this.addQuestion} 
                    />
            case 4:
                return <QuestionComments
                    addComment={this.addComment} 
                    comments={this.state.comments}
                    question={this.state.question} 
                    questionResult={this.state.questionResult} 
                    />
        }
    }
    render(){

        return(
            <div>
                <Header user={this.state.user}  changePage={this.changePage}/>
                <div className="row">
                    <div className="column side" >
                        <Contributors users={this.state.users} />
                    </div>
                    <div className="column middle" >
                        {this.renderSwitch(this.state.page)}
                    </div>
                    <div className="column side" >Under Construction</div>
                </div>
                <Footer />
            </div>
        )
    }
}