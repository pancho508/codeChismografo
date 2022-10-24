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
        <h1>Comments </h1>
        <br/>
        <div className="addComment">
            <form onSubmit={(e) => {props.addComment(e)}}>
                <label htmlFor="addComment">Add A Comment...</label><br/>
                <input type="text" id="addComment" name="addComment" placeholder="Add A Comment..." /><br/><br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
        <br />
        <div className="comments">
            {props.comments.map((el, indx) => <h1 key={indx}>{el.text}</h1>)}
            <div className="card">
                <h5>Title description, Dec 7, 2017</h5>
                <p>User Name..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
        </div>
        {console.log('questionsComments props', props)}
    </div>
)