var Question = (props) => {
    console.log('question props', props)
    if(props.question){
        return(
            <div className="questionare">
                <h1>Single Question</h1>
                <h3>Topics: {props.question.topic}</h3>
                <p>by: {props.question.createdBy}</p>
                <img src={props.question.imageURL}></img>
                <h2>Question: {props.question.question}</h2>
                <form className="question" onSubmit={(e) => {
                        props.answerQuestion(e, props.question.uuid)
                    }}>
                    <label className="choose" htmlFor="question">Choose one Answer</label><br /><br />
                    {props.question.answers.map((el, indx) => <Answer key={indx} answer={el} />)}
                    <br />
                    <input className="questionSubmit" type="submit" value="Submit" />
                </form>
                <br />
                {/*  
                    WARNING!!
                    We do not load the comments on this page it will be on the solve question page \
                    TODO 
                        build comments page 
                        we can use the uuid on the question to query the db for the comments associated to it.
                        we add comment form. 
                        method to add and get:id comment
                */}
            </div>
        )
    }else{
       return(
        <div>
            Nothing to render...
        </div>
       )
    }
}
