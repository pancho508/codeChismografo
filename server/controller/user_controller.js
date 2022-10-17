const userModel = require("../model/user_model.js")
// console.log("3. this is the userModel", userModel)

exports.userCreate = (req, res) => {
    const userObj = {
        ...req.body, 
        sprintScore: 0,
        totalScore: 0,
        validated: false,
    }
    userModel.userCreate(userObj)
     .then(empty => {
        res.end(JSON.stringify(userObj))
      })
      .catch(error => {
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