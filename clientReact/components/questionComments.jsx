var QuestionComments = (props) => (
    <div>
        {console.log("QuestionComments props", props)}
        <h1>Question Results: </h1>
        <h1>{props.questionResult.correct ? "noIce! You got it right!" : "opps, better luck next time"}</h1>
        <br/>
        <h2>Would you like to know more?</h2>
        <h3>{props.question.articleLink}</h3>
        <br/>
        <h3>likes: {props.question.like} dislikes: {props.question.dislike}</h3>
        <h1>Add Comment</h1>
        <br/>
        <div className="addComment">
            <form onSubmit={(e) => {props.addComment(e)}}>
                <label htmlFor="addComment">Add A Comment...</label><br/>
                <input type="text" id="addComment" name="addComment" placeholder="Add A Comment..." /><br/><br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
        <br />
        <h1>All Comments</h1>
        <div className="comments">
            {props.comments.map((el, indx) => (
                    <div className="card" key={indx}>
                        <h5>{el.date}</h5>
                        <p>{el.text}</p>
                        <h5>{el.createdBy}</h5>
                    </div>
            ))}
    
        </div>
        {console.log('questionsComments props', props)}
    </div>
)