var Home = (props) => (
    <div>
        <h1>All Questions</h1>
        {props.qArr.map((el, indx) => (
            <div key={indx}>
                <h2>Question: {el.question}</h2>
                <h3>Created by: {el.createdBy}</h3>
                <h4>Topic: {el.topic}</h4>
                {/* {
                    el.topic.map((el, indx) => <p key={indx} >{el}</p>)
                } */}
                <button onClick={(e) =>{ props.onQuestionClick(e, el) }} >try me</button>
            </div>
        ))}
    </div>
)