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
                <ul>
                    {/* we need to mix these answers up  */}
                    <li>{props.question.correctAnswer}</li>
                    <li>{props.question.wrongAnswer1}</li>
                    <li>{props.question.wrongAnswer2}</li>
                    <li>{props.question.wrongAnswer3}</li>
                </ul>
                <button onClick={(e) =>{ console.log('set up the ul as a form to the db to store right or wrong val') }} >Submit Answer</button>
                <br />
                <a href={props.question.articleLink} >{props.question.articleLink}</a>
                {/* maybe these should be on answer page
                    articleLink:
                    like:
                    dislike: 
                */}

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
