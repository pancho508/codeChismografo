const uuid = require('uuid')
const ormSession = require("../db/index.js")

exports.commentCreate = (commentObj) => {
    console.log("b. commentCreate MODEL", commentObj)
    const id = uuid.v4()
    const session = ormSession()
    return session
      .run(`CREATE (n: Comment {
        uuid: '${id}',
        text: $text,
        like: $like,
        dislike: $dislike 
      })`, commentObj)
      .then(() => session.close())
      //TODO - Need to crate a relationship when creating this comment
}

exports.commentsGet = (commentObj) => {
    console.log("b. commentsGet MODEL ======", commentObj)
    const session = ormSession()
    return session
      .run('MATCH (a: Comment) return a')
      .then((result)=>{
        resArr = []
        result.records.forEach(record => {
          resArr.push(record.get('a').properties)
        })
        return resArr
      })
      .then((resArr) => {
        session.close()
        return resArr
      })

}

exports.commentEdit = (commentObj) => {
  console.log("b. commentEdit MODEL", commentObj)
    //for now I omitted text since everything in the comment node is subject to change including the text, so for now text can't be changed

    //ideally we want to use some sort of UUID
  const session = ormSession()
  return session
    .run(`MATCH (n: Comment {uuid: $uuid})
          SET n.text = $text
          SET n.like = $like
          SET n.dislike = $dislike
          RETURN n`, commentObj)
    .then(() => {
      session.close()
    })
}

exports.commentDelete = (commentObj) => {
  console.log("b. commentDelete MODEL", commentObj)
  const session = ormSession()
  return session
    .run('MATCH (n: Comment {uuid: $uuid}) DELETE n', commentObj)
    .then(() => {
      session.close()
    })
}
