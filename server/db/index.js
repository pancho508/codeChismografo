var neo4j = require('neo4j-driver')

const dotenv = require('dotenv')
dotenv.config()
console.log("this is the process =>", process.env.neo4j_url)
console.log("this is the process =>", process.env.neo4j_username)
console.log("this is the process =>", process.env.neo4j_password)

var driver = neo4j.driver(
    process.env.neo4j_url,
    neo4j.auth.basic(process.env.neo4j_username, process.env.neo4j_password)
  )

// var session = driver.session()
// console.log('5. this is the orm session', session)

const session = () => {
  return driver.session()
}

module.exports = session