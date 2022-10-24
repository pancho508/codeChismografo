const uuid = require('uuid')

const userModel = require("../model/user_model.js")

// console.log("3. this is the userModel", userModel)

exports.userCreate = (req, res) => {
    const id = uuid.v4()

    const userObj = {
        ...req.body, 
        sprintScore: 0,
        totalScore: 0,
        validated: false,
        uuid: id
    }
    userModel.userCreate(userObj)
     .then(empty => {
        userObj.auth = true
        res.end(JSON.stringify(userObj))
      })
      .catch(error => {
        console.log(error)
        res.end('ohh nooo we go into an error')
      })
}

exports.usersGet = (req, res) => {
    userModel.usersGet(req.body)
      .then(data => {
        // console.log('data in controller ===>', data)
        res.end(JSON.stringify(data))
      })
      .catch(error => {
        throw error
      })  
}

exports.userLogin = (req, res) => {
  console.log('userLogin look Pancho ===>', req.query)
  userModel.userLogin(req.query)
    .then(data => {
      // check that the password maches the one given 
      console.log(req.query.password, " vs ", data[0].password)
      if(req.query.password === data[0].password){
        data[0].auth = true
        res.end(JSON.stringify(data[0]))
      } else {
        res.end(JSON.stringify({auth: false}))
      }
    })
    .catch(error => {
      console.log('I dont think we get into this catch block')
      res.end(JSON.stringify({auth: false}))
    })  
}

exports.userEdit = (req, res) => {
    userModel.userEdit(req.body)
        .then(() => {
            res.end("userEdit")
        })
        .catch(error => {
            throw error
        })
}

exports.userDelete = (req, res) => {
    userModel.userDelete(req.body)
        .then(()=> {
            res.end("userDelete")
        })
        .catch(error => {
            throw error
        })
}