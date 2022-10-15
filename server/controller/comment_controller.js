const commentModel = require("../model/comment_model.js")
// console.log("3. this is the commentModel", commentModel)

exports.commentCreate = (req, res) => {
    console.log("a. commentCreate controller", req.body)
    commentModel.commentCreate(req.body)
     .then(result => {
        res.end("commentCreate properly")
      })
      .catch(error => {
        res.end('ohh nooo we go into an error')
      })
}

exports.commentsGet = (req, res) => {
    console.log(" a. commentsGet controller", req.body)
    commentModel.commentsGet(req.body)
      .then(data => {
        console.log('data in controller ===>', data)
        res.end(JSON.stringify(data))
      })
      .catch(error => {
        throw error
      })
    
}

exports.commentEdit = (req, res) => {
    console.log("a. commentEdit controller ---", req.body)
    commentModel.commentEdit(req.body)
        .then(() => {
            res.end("commentEdit")
        })
        .catch(error => {
            throw error
        })
}

exports.commentDelete = (req, res) => {
    console.log("a. commentDelete controller", req.body)
    commentModel.commentDelete(req.body)
        .then(()=> {
            res.end("commentDelete")
        })
        .catch(error => {
            throw error
        })
}