class App extends React.Component {
    constructor(){
        super()
        this.state = {
            page : 0
        }
        this.changePage = this.changePage.bind(this)
        this.login = this.login.bind(this)
        this.singUp = this.singUp.bind(this)
    }
    changePage(pageNum){
        this.setState({
            page: pageNum
        })
    }
    login(){
        //should hit the server and query the db
        //Auth the user
        //use JWT for session
        //redirect to homepage
    }
    singUp(){
        //hit server passing in form data
        // server should save the user 
        // on success res we should take to home 
    }
    render(){
        return(
            <div>
                <Header />
                {/* <button onClick={(e) => {
                    this.changePage(1)
                }} >Change</button> */}
                { this.state.page === 0 ? <LoginSignUp /> : <h1>noDice</h1> }
                <Footer />
            </div>
        )
    }
}