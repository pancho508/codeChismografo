var QuestionComments = (props) => (
    <div>
        <h1>Solved Question: {props.questionResult.correct ? "noIce! You got it right!" : "opps, better luck next time"}</h1>
        <h2>Article Link: {props.question.articleLink}</h2>
        <h3>likes: {props.question.like} dislikes: {props.question.dislike}</h3>
        <h1>Comments </h1>
        {console.log('questionsComments props', props)}
    </div>
)