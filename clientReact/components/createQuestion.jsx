var CreateQuestion = (props) => (
    <div>
        <form className="createQuestion" onSubmit={(e) => { props.addQuestion(e) }}>
            <label >Question:</label><br/>
            <input type="text" id="question" name="question" /><br/>
            <label >Correct Answer Here:</label><br/>
            <input type="text" id="correctAnswer" name="correctAnswer" /><br/><br/>
            <label >Wrong Answer 1:</label><br/>
            <input type="text" id="wrongAnswer1" name="wrongAnswer1" /><br/><br/>
            <label >Wrong Answer 2:</label><br/>
            <input type="text" id="wrongAnswer2" name="wrongAnswer2" /><br/><br/>
            <label >Wrong Answer 3:</label><br/>
            <input type="text" id="wrongAnswer3" name="wrongAnswer3" /><br/><br/>
            <label >Image URL:</label><br/>
            <input type="text" id="imageURL" name="imageURL" /><br/>
            <label >Topic:</label><br/>
            <select  type="text" id="topic" name="topic">
                <option value="">Select Topic:</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="VueJS">VueJS</option>
                <option value="ReactJS">ReactJS</option>
                <option value="NodeJS">NodeJS</option>
                <option value="Neo4J">Neo4J</option>
                <option value="MySql">MySql</option>
                <option value="Mongo">Mongo</option>
                <option value="AWS">AWS</option>
                <option value="Github">Github</option>
                <option value="Docker">Docker</option>
                <option value="MachineLearning">Machine Learning</option>
            </select><br/> 
            <label >Article Link:</label><br/>
            <input type="text" id="articleLink" name="articleLink" /><br/>            

            <input type="submit" value="Submit" />
        </form>
    </div>
)
