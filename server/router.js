const express = require('express')

const router = express.Router()

const test = (req, res) => {
    console.log("you are hitting the test controller")
}

router.get('/test', test)     

router.all('*', (req, res, next) => {
const error = new Error('No matching route found')
error.details = {requestedRoute: req.path}
error.statusCode = 404
next(error)
})

module.exports = router;