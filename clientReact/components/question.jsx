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
