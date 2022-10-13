const userModel = require("../model/user_model.js")
console.log("3. this is the userModel", userModel)

exports.userCreate = (req, res) => {
    console.log("a. userCreate controller", req.body)
    userModel.userCreate(req.body)
    res.end("userCreate")
}

exports.usersGet = (req, res) => {
    console.log(" a. usersGet controller", req.body)
    userModel.usersGet(req.body)
    res.end("usersGet")
}

exports.userEdit = (req, res) => {
    console.log("a. userEdit controller", req.body)
    userModel.userEdit(req.body)
    res.end("userEdit")
}

exports.userDelete = (req, res) => {
    console.log("a. userDelete controller", req.body)
    userModel.userDelete(req.body)
    res.end("userDelete")
}