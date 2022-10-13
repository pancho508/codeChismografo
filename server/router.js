const express = require('express')
const userController = require("./controller/user_controller.js");
// console.log('2. este es el userController', userController)

const router = express.Router()

router.post('/user', userController.userCreate)
router.get('/user', userController.usersGet)     
router.put('/user', userController.userEdit)     
router.delete('/user', userController.userDelete)     


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
  