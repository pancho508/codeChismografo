const ormSession = require("../db/index.js")

console.log('4. this is the orm that model sees')
exports.userCreate = (userObj) => {
    console.log("b. userCreate MODEL", userObj)
    //convierte este query a que inserte el usuario
    const session = ormSession()
    return session
      .run(`CREATE (n: User {
        name: $name, 
        email: $email, 
        password: $password, 
        totalScore: $totalScore, 
        sprintScore: $sprintScore, 
        validated: $validated
      })`, userObj)
      .then(() => session.close())
}

exports.usersGet = (userObj) => {
    console.log("b. usersGet MODEL", userObj)
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

exports.userEdit = (userObj) => {
  console.log("b. userEdit MODEL", userObj)
  // Ten cuidado si usas el nombre como unico tendras que reflejar eso en el schema
  // uuid una buena idea?
  const session = ormSession()
  return session
    .run(`MATCH (n: User {email: $email})
          SET n.name = $name
          SET n.password = $password
          SET n.totalScore = $totalScore
          SET n.sprintScore = $sprintScore
          SET n.validated = $validated
          RETURN n`, userObj)
    .then((result) => {
      console.log("user edited", result)
    })
    .then(() => {
      session.close()
    })
}

exports.userDelete = (userObj) => {
  console.log("b. userDelete MODEL", userObj)
  const session = ormSession()
  return session
    .run('MATCH (n: User {email: $email}) DELETE n', userObj)
    .then((result) => {
      console.log("user deleted", result)
    })
    .then(() => {
      session.close()
    })
}