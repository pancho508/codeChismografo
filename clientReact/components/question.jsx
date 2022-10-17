var Question = (props) => {
    console.log('question props', props)
    if(props.question){
        return(
            <div>
                <h1>Single Question</h1>
                <img src={props.question.imageURL}></img>
                <h2>Question: {props.question.text}</h2>
                <ul>
                    <li>{props.question.answers[0]}</li>
                    <li>{props.question.answers[1]}</li>
                    <li>{props.question.answers[2]}</li>
                    <li>{props.question.answers[3]}</li>
                </ul>
                <a href={props.question.article} >{props.question.article}</a>
                {/* 
                    we need to start loading the comments 
                    this means we need to hit the server and load them up on this div
                    given that im not using hooks we can conver this comp. to a class and on a live cycle we can just load them up from the db. 
                    This way we dont query all the comments from the init. 
                    WARNING!!
                    We do not load the comments on this page it will be on the solve question page \
                    TODO 
                        build comments page 
                        build router switch?
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
