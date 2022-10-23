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
                    <input type="radio" id="correctAnswer" name="chosenAnswer" value="correctAnswer" />
                    <label htmlFor="correctAnswer">{props.question.correctAnswer}</label><br />
                    <input type="radio" id="wrongAnswer1" name="chosenAnswer" value="wrongAnswer1" />
                    <label htmlFor="wrongAnswer1">{props.question.wrongAnswer1}</label><br />
                    <input type="radio" id="wrongAnswer2" name="chosenAnswer" value="wrongAnswer2" />
                    <label htmlFor="wrongAnswer2">{props.question.wrongAnswer2}</label><br />
                    <input type="radio" id="wrongAnswer3" name="chosenAnswer" value="wrongAnswer3" />
                    <label htmlFor="wrongAnswer3">{props.question.wrongAnswer3}</label><br /><br />

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
