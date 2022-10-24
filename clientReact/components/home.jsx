var Home = (props) => (
    <div>
        <h1>All Questions</h1>
        <div class="topnav">
            <a class="active" href="#All">All</a>
            <a value="JavaScript">JavaScript</a>
            <a value="Python">Python</a>
            <a value="VueJS">VueJS</a>
            <a value="ReactJS">ReactJS</a>
            <a value="NodeJS">NodeJS</a>
            <a value="Neo4J">Neo4J</a>
            <a value="MySql">MySql</a>
            <a value="Mongo">Mongo</a>
            <a value="AWS">AWS</a>
            <a value="Github">Github</a>
            <a value="Docker">Docker</a>
            <a value="MachineLearning">Machine Learning</a> 
        </div>
        {props.qArr.map((el, indx) => (
            <div key={indx} className="questionBox">
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