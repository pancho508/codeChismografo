const ormSession = require("../db/index.js")

exports.userCreate = (userObj) => {
    const session = ormSession()
    return session
      .run(`CREATE (n: User {
        uuid: $uuid,
        name: $name, 
        email: $email, 
        password: $password, 
        totalScore: $totalScore, 
        sprintScore: $sprintScore, 
        validated: $validated
      })`, userObj)
      .then((data ) => {
        session.close()
        return data
      })
}

exports.usersGet = (userObj) => {
    // const rxSession = ormSession.createRxSession()
    // return rxSession
    //   .run('MATCH (a: User) return a')
    //   .records()
    //   .pipe(map(record => record.get('name')))
    //   .then(() => ormSession.close())
    const session = ormSession()
    return session
      .run('MATCH (a: User) return a')
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

exports.userLogin = (userObj) => {
  const session = ormSession()
  return session
    .run(`MATCH (n: User {email: $email}) RETURN n LIMIT 1`, userObj) // LIMIT 1 here is not good, should add unique on email
    .then((result)=>{
      resArr = []
      result.records.forEach(record => {
        resArr.push(record.get('n').properties)
      })
      return resArr
    })
    .then((resArr) => {
      session.close()
      return resArr
    })
}

exports.userEdit = (userObj) => {
  const session = ormSession()
  return session
    .run(`MATCH (n: User {uuid: $uuid})
          SET n.email = $email
          SET n.name = $name
          SET n.password = $password
          SET n.sprintScore = $sprintScore
          SET n.totalScore = $totalScore
          SET n.validated = $validated
          RETURN n`, userObj)
    .then(() => {
      session.close()
    })
}

exports.userDelete = (userObj) => {
  const session = ormSession()
  return session
    .run('MATCH (n: User {uuid: $uuid}) DELETE n', userObj)
    .then(() => {
      session.close()
    })
}