const userModel = require("../model/user_model.js")
// console.log("3. this is the userModel", userModel)

exports.userCreate = (req, res) => {
    const userObj = {
        ...req.body, 
        totalScore: 0,
        sprintScore: 0,
        validated: false,
    }
    console.log("a. userCreate controller", userObj)
    userModel.userCreate(userObj)
     .then(result => {
        res.end("userCreate properly")
      })
      .catch(error => {
        res.end('ohh nooo we go into an error')
      })
}

exports.usersGet = (req, res) => {
    console.log(" a. usersGet controller", req.body)
    userModel.usersGet(req.body)
      .then(data => {
        console.log('data in controller ===>', data)
        res.end(JSON.stringify(data))
      })
      .catch(error => {
        throw error
      })
    
}

exports.userEdit = (req, res) => {
    console.log("a. userEdit controller", req.body)
    userModel.userEdit(req.body)
    res.end("userEdit")
}

exports.userDelete = (req, res) => {
    console.log("a. userDelete controller", req.body)
    userModel.userDelete(req.body)
        .then(()=> {
            res.end("userDelete")
        })
        .catch(error => {
            throw error
        })
}