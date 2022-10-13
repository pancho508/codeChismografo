const ormSession = require("../db/index.js")

console.log('4. this is the orm that model sees')
exports.userCreate = (userObj) => {
    console.log("b. userCreate MODEL", userObj)
    //convierte este query a que inserte el usuario
    ormSession
      .run('MATCH (n:COALESCED) RETURN n LIMIT 25')
      .then(result => {
        for(let i = 0; i < result.records.length; i++){
            console.log('result', result.records[i]._fields[0])
        }
      })
      .catch(error => {
        console.log(error)
      })
      .then(() => ormSession.close())
}

exports.usersGet = (userObj) => {
    console.log("b. usersGet MODEL", userObj)
    // aqui tenemos que hacer un query para que agrarremos todos los usuarios 
    // no creo que sea util horita pero despues del mvp sera usado 
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