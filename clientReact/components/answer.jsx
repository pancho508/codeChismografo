var Answer = (props) => {
    const tVal = props.answer.correct ? "correctAnswer" : "wrongAnswer"
    return(
        <>
            <input type="radio" id={tVal} name="chosenAnswer" value={tVal} />
            <label htmlFor={tVal}>{props.answer.text}</label><br />
        </>
    )
}