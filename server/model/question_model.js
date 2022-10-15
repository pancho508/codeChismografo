const uuid = require('uuid')
const ormSession = require("../db/index.js")

exports.questionCreate = (questionObj) => {
    console.log("b. questionCreate MODEL", questionObj)
    const id = uuid.v4()
    const session = ormSession()
    return session
      .run(`CREATE (n: Question {
        uuid: '${id}',
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
    //for now I omitted text since everything in the question node is subject to change including the text, so for now text can't be changed

    //ideally we want to use some sort of UUID
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