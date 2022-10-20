const express = require('express')
const userController = require("./controller/user_controller.js");
const questionController = require("./controller/question_controller.js");
const commentController = require("./controller/comment_controller.js");

// console.log('2. este es el userController', userController)

const router = express.Router()

router.post('/user', userController.userCreate)
router.get('/user', userController.usersGet)
router.get('/userLogin', userController.userLogin)
router.put('/user', userController.userEdit)     
router.delete('/user', userController.userDelete)     

router.post('/question', questionController.questionCreate)
router.get('/question', questionController.questionsGet)     
router.put('/question', questionController.questionEdit)     
router.delete('/question', questionController.questionDelete) 

router.post('/comment', commentController.commentCreate)
router.get('/comment', commentController.commentsGet)     
router.put('/comment', commentController.commentEdit)     
router.delete('/comment', commentController.commentDelete)  

router.all('*', (req, res, next) => {
const error = new Error('No matching route found')
error.details = {requestedRoute: req.path}
error.statusCode = 404
res.end(error)
// next(error)
})

module.exports = router;

// app.get('/user', function (req, res) {
//     res.send('user get')
//   })
  
//   app.post('/user', function (req, res) {
//     console.log('this is req.body', req.body)
//     res.send('bajo construction')
//   })
  