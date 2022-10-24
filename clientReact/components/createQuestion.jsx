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
            <select>
                <option value="0">Select Topic:</option>
                <option value="1">JavaScript</option>
                <option value="2">Python</option>
                <option value="3">VueJS</option>
                <option value="4">ReactJS</option>
                <option value="5">NodeJS</option>
                <option value="6">Neo4J</option>
                <option value="7">MySql</option>
                <option value="8">Mongo</option>
                <option value="9">AWS</option>
                <option value="10">Github Actions</option>
                <option value="11">Docker</option>
                <option value="12">Machine Learning</option>
            </select>
            <input type="text" id="topic" name="topic" /><br/> 
            {/* need to remove this            */}
            <label >articleLink:</label><br/>
            <input type="text" id="articleLink" name="articleLink" /><br/>            

            <input type="submit" value="Submit" />
        </form>
    </div>
)
