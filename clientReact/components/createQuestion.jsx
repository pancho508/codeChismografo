var CreateQuestion = (props) => (
    <div>
        <form className="login" onSubmit={(e) => { props.addQuestion(e) }}>
            <label >question:</label><br/>
            <input type="text" id="question" name="question" /><br/>
            <label >Correct Answer Here:</label><br/>
            <input type="text" id="correctAnswer" name="correctAnswer" /><br/><br/>
            <label >Wrong Answer 1:</label><br/>
            <input type="text" id="wrongAnswer1" name="wrongAnswer1" /><br/><br/>
            <label >Wrong Answer 2:</label><br/>
            <input type="text" id="wrongAnswer2" name="wrongAnswer2" /><br/><br/>
            <label >Wrong Answer 3:</label><br/>
            <input type="text" id="wrongAnswer3" name="wrongAnswer3" /><br/><br/>

            <label >imageURL:</label><br/>
            <input type="text" id="imageURL" name="imageURL" /><br/>
            <label >topic:</label><br/>
            <input type="text" id="topic" name="topic" /><br/>            
            <label >articleLink:</label><br/>
            <input type="text" id="articleLink" name="articleLink" /><br/>            

            <input type="submit" value="Submit" />
        </form>
    </div>
)
