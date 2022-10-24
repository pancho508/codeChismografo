const ormSession = require("../db/index.js")

exports.answerQuestion = (relObj) => {
  console.log('answerQuestion model relObj =>', relObj)
  const session = ormSession()
  return session
    .run(`
    MATCH (u: User {uuid: $user_uuid}),
    (q: Question {uuid: $question_uuid})
    CREATE (u)-[:ANSWERED {correct: $correct}]->(q)
    `, relObj)
    .then(() => session.close())
    .catch((err) => {
      console.log('questioCreate Model ERROR => ', err)
      return err
    })
}

exports.questionCreate = (questionObj) => {
    console.log("b. questionCreate MODEL lookPancho =>", questionObj)
    const session = ormSession()
    return session
      .run(`
        MATCH (u: User {name: $createdBy})
        CREATE (u)-[:ASK]->(n: Question {
        uuid: $uuid,
        question: $question,
        imageURL:  $imageURL,
        topic: $topic,
        articleLink: $articleLink,
        answers: $answers,
        like: $like, 
        dislike: $dislike,
        createdBy: $createdBy,
        correctAnswer: $correctAnswer,
        wrongAnswer1: $wrongAnswer1,
        wrongAnswer2: $wrongAnswer2,
        wrongAnswer3: $wrongAnswer3
      })`, questionObj)
      .then(() => session.close())
      .catch((err) => {
        console.log('questioCreate Model ERROR => ', err)
        return err
      })
}

exports.questionsGet = (questionObj) => {
    console.log("b. questionsGet MODEL ======", questionObj)
    const session = ormSession()
    return session
      .run('MATCH (a: Question) return a')
      .then((result)=>{
        console.log('this is the result', result)
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
  const session = ormSession()
  return session
    .run(`MATCH (n: Question {uuid: $uuid})
          SET n.text = $text
          SET n.topic = $topic
          SET n.imageURL = $imageURL
          SET n.answers = $answers
          SET n.article = $article
          SET n.like = $like
          SET n.dislike = $dislike
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
    .run('MATCH (n: Question {uuid: $uuid}) DELETE n', questionObj)
    .then((result) => {
      console.log("question deleted", result)
    })
    .then(() => {
      session.close()
    })
}
