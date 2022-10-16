class App extends React.Component {
    constructor(){
        super()
        this.state = {
            page : 0
        }
        this.changePage = this.changePage.bind(this)
    }
    changePage(pageNum){
        this.setState({
            page: pageNum
        })
    }
    render(){
        return(
            <div>
                <h1>Hello world Pancho</h1>
                <button onClick={(e) => {
                    this.changePage(1)
                }} >Change</button>
            {
                this.state.page === 1 ? <h1>uno</h1> : <h1>noDice</h1>
            }
            </div>
        )
    }
}