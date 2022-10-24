const commentModel = require("../model/comment_model.js")
// console.log("3. this is the commentModel", commentModel)

exports.commentCreate = (req, res) => {
    console.log("a. commentCreate controller", req.body)
    commentModel.commentCreate(req.body)
     .then(result => {
        res.status(201).end()
      })
      .catch(error => {
        res.end('ohh nooo we go into an error')
      })
}

exports.commentsGet = (req, res) => {
    console.log(" a. commentsGet controller", req.query)
    commentModel.commentsGet(req.query)
      .then(data => {
        console.log('commentsGet controller DATA ===>', data)
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