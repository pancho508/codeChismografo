var Question = (props) => {
    console.log('question props', props)
    if(props.question){
        return(
            <div>
                <h1>Single Question {props.question.uuid}</h1>
                <h3>{props.question.topic}</h3>
                <img src={props.question.imageURL}></img>
                <h2>Question: {props.question.question}</h2>
                <p>by: {props.question.createdBy}</p>
                <form className="question" onSubmit={(e) => {
                        props.answerQuestion(e, props.question.uuid)
                    }}>
                    {props.question.answers.map((el, indx) => <Answer key={indx} answer={el} />)}
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <a href={props.question.articleLink} >{props.question.articleLink}</a>
                {/*  
                    WARNING!!
                    We do not load the comments on this page it will be on the solve question page \
                    TODO 
                        build comments page 
                        we can use the uuid on the question to query the db for the comments associated to it.
                        we add comment form. 
                        method to add and get:id comment
                    Show 
                        articleLink:
                        like:
                        dislike: 
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
