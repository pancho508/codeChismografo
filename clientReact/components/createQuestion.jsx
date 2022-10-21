var CreateQuestion = (props) => (
    <div>
        <form className="login" onSubmit={(e) => {console.log('this is e', e)}}>
            <label >question:</label><br/>
            <input type="text" id="question" name="question" /><br/>
            <label >Crrect Answer Here:</label><br/>
            <input type="text" id="correctAnswer" name="correctAnswer" /><br/><br/>
            <label >Wrong Answer 1:</label><br/>
            <input type="text" id="wrongAnswer1" name="wrongAnswer1" /><br/><br/>
            <label >Wrong Answer 2:</label><br/>
            <input type="text" id="wrongAnswer2" name="wrongAnswer2" /><br/><br/>
            <label >Wrong Answer 3:</label><br/>
            <input type="text" id="wrongAnswer3" name="wrongAnswer3" /><br/><br/>

            <input type="submit" value="Submit" />
        </form>
    </div>
)