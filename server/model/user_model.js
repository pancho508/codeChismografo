const ormSession = require("../db/index.js")

console.log('4. this is the orm that model sees')
exports.userCreate = (userObj) => {
    console.log("b. userCreate MODEL", userObj)
    //convierte este query a que inserte el usuario
    const session = ormSession()
    return session
      .run('CREATE (n:User {name: $name, email: $email, password: $password, totalScore: $totalScore, sprintScore: $sprintScore, validated: $validated})', userObj)
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

}

exports.userDelete = (userObj) => {
    console.log("b. userDelete MODEL", userObj)
    // Ten cuidado si usas el nombre como unico tendras que reflejar eso en el schema
    // uuid una buena idea?
}