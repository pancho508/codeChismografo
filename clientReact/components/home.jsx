var Home = (props) => (
    <div>
        <h1>All Questions</h1>
        {props.qArr.map((el, indx) => (
            <div key={indx}>
                <h2>Question: {el.text}</h2>
                {
                    el.topic.map((el, indx) => <p key={indx} >{el}</p>)
                }
                <button onClick={(e) =>{ props.onQuestionClick(e, el) }} >try me</button>
            </div>
        ))}
    </div>
)