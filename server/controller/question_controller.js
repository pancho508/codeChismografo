const questionModel = require("../model/question_model.js")
// console.log("3. this is the questionModel", questionModel)

exports.questionCreate = (req, res) => {
    console.log("a. questionCreate controller DICE!!!", req.body)
    questionModel.questionCreate(req.body)
     .then(result => {
        res.end("questionCreate properly")
      })
      .catch(error => {
        res.end('ohh nooo we go into an error')
      })
}

exports.questionsGet = (req, res) => {
    console.log(" a. questionsGet controller", req.body)
    questionModel.questionsGet(req.body)
      .then(data => {
        console.log('data in controller ===>', data)
        res.end(JSON.stringify(data))
      })
      .catch(error => {
        throw error
      })
    
}

exports.questionEdit = (req, res) => {
    console.log("a. questionEdit controller ---", req.body)
    questionModel.questionEdit(req.body)
        .then(() => {
            res.end("questionEdit")
        })
        .catch(error => {
            throw error
        })
}

exports.questionDelete = (req, res) => {
    console.log("a. questionDelete controller", req.body)
    questionModel.questionDelete(req.body)
        .then(()=> {
            res.end("questionDelete")
        })
        .catch(error => {
            throw error
        })
}