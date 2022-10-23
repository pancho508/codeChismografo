var Home = (props) => (
    <div>
        <h1>All Questions</h1>
        <div className="left">
            <h2>Menu</h2>
            <input type="text" id="mySearch"  placeholder="Search.." title="Type in a category" />
            <ul id="myMenu" >
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">JavaScript</a></li>
                <li><a href="#">PHP</a></li>
                <li><a href="#">Python</a></li>
                <li><a href="#">jQuery</a></li>
                <li><a href="#">SQL</a></li>
                <li><a href="#">Bootstrap</a></li>
                <li><a href="#">Node.js</a></li>
            </ul>
        </div>
        <br />
        <h1>Recent Questions</h1>
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