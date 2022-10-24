var QuestionComments = (props) => (
    <div className="mainComment">
        <h1>Question Results: </h1>
        <h1>{props.questionResult.correct ? "noIce! You got it right!" : "opps, better luck next time"}</h1>
        <br/>
        <h2>Would you like to know more?</h2>
        <a href={props.question.articleLink}><h2>Click Me!!</h2></a>
        <br/>
        <button className="likeBTN btn" id="green">
            <i className="fa fa-thumbs-up fa-lg" aria-hidden="true"></i>
            {props.question.like}
        </button>
        <button className="dislikeBTN btn" id="red">
            <i className="fa fa-thumbs-down fa-lg" aria-hidden="true"></i>
            {props.question.dislike}
        </button>
        <br/>
        <div className="addComments">
            <form onSubmit={(e) => {props.addComment(e)}}>
                <label htmlFor="addComment">Add A Comment...</label><br/>
                <input type="text" id="addComment" name="addComment" placeholder="Add A Comment..." /><br/><br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
        <br />
        <div className="allComments">
            <h1>All Comments</h1>
            {props.comments.map((el, indx) => (
                    <div className="commentCard" key={indx}>
                        <h5>{el.date}</h5>
                        <p>{el.text}</p>
                        <h5>by: {el.createdBy}</h5>
                        <button className="likeBTN btn" id="green">
                            <i className="fa fa-thumbs-up fa-lg" aria-hidden="true"></i>
                            {props.question.like}
                        </button>
                        <button className="dislikeBTN btn" id="red">
                            <i className="fa fa-thumbs-down fa-lg" aria-hidden="true"></i>
                            {props.question.dislike}
                        </button>
                    </div>
            ))}
    
        </div>
        {console.log('questionsComments props', props)}
    </div>
)