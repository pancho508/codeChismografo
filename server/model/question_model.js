const ormSession = require("../db/index.js")

console.log('4. this is the orm that model sees')
exports.questionCreate = (questionObj) => {
    console.log("b. questionCreate MODEL", questionObj)
    const session = ormSession()
    return session
      .run(`CREATE (n: Question {
        text: $text,
        imageURL:  $imageURL,
        answers: $answers,
        topic: $topic,
        article: $article,
        like: $like, 
        dislike: $dislike 
      })`, questionObj)
      .then(() => session.close())
      //TODO - Need to crate a relationship when creating this question
}

exports.questionsGet = (questionObj) => {
    console.log("b. questionsGet MODEL", questionObj)
    // const rxSession = ormSession.createRxSession()
    // return rxSession
    //   .run('MATCH (a: question) return a')
    //   .records()
    //   .pipe(map(record => record.get('name')))
    //   .then(() => ormSession.close())
    const session = ormSession()
    return session
      .run('MATCH (a: question) return a')
      .then((result)=>{
        console.log('this is the result ', result.records.length)
        resArr = []
        result.records.forEach(record => {
          resArr.push(record.get('a').properties)
        })
        console.log('its an async issue', resArr)
        return resArr
      })
      .then((resArr) => {
        session.close()
        return resArr
      })

}

exports.questionEdit = (questionObj) => {
  console.log("b. questionEdit MODEL", questionObj)
  // Ten cuidado si usas el nombre como unico tendras que reflejar eso en el schema
  // uuid una buena idea?
  const session = ormSession()
  return session
    .run(`MATCH (n: question {email: $email})
          SET n.name = $name
          SET n.password = $password
          SET n.totalScore = $totalScore
          SET n.sprintScore = $sprintScore
          SET n.validated = $validated
          RETURN n`, questionObj)
    .then((result) => {
      console.log("question edited", result)
    })
    .then(() => {
      session.close()
    })
}

exports.questionDelete = (questionObj) => {
  console.log("b. questionDelete MODEL", questionObj)
  const session = ormSession()
  return session
    .run('MATCH (n: question {email: $email}) DELETE n', questionObj)
    .then((result) => {
      console.log("question deleted", result)
    })
    .then(() => {
      session.close()
    })
}