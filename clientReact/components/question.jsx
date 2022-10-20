var Question = (props) => {
    console.log('question props', props)
    if(props.question){
        return(
            <div>
                <h1>Single Question</h1>
                <img src={props.question.imageURL}></img>
                <h2>Question: {props.question.text}</h2>
                <ul>
                    {/* we need to mix these answers up  */}
                    <li>{props.question.answers[0]}</li>
                    <li>{props.question.answers[1]}</li>
                    <li>{props.question.answers[2]}</li>
                    <li>{props.question.answers[3]}</li>
                </ul>
                <button onClick={(e) =>{ console.log('set up the ul as a form to the db to store right or wrong val') }} >Submit Answer</button>

                <a href={props.question.article} >{props.question.article}</a>

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
